# featureFlagAndSettingValues

## Overview

With these endpoints you can control how your existing Feature Flags and Settings should serve their values. 
You can turn Feature Flags on or off, update Setting values and also add, remove or reorder Percentage and Targeting Rules.

To determine which Feature Flag or Setting you want to work with you have to pass its `settingId`. It can be
obtained from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.

You also have to specify in which Environment you want to change the served value configuration by its
`environmentId` which can be obtained from the [List Environments](#operation/get-environments) endpoint.

### Available Operations

* [getSettingValue](#getsettingvalue) - Get value
* [getSettingValues](#getsettingvalues) - Get values
* [postSettingValues](#postsettingvalues) - Post values
* [replaceSettingValue](#replacesettingvalue) - Replace value
* [updateSettingValue](#updatesettingvalue) - Update value

## getSettingValue

This endpoint returns the value of a Feature Flag or Setting 
in a specified Environment identified by the `environmentId` parameter.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingValueRequest;
import org.openapis.openapi.models.operations.GetSettingValueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime", "et") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSettingValueRequest req = new GetSettingValueRequest("73d689ee-e952-46f8-9986-e881ead4f0e1", 36033);            

            GetSettingValueResponse res = sdk.featureFlagAndSettingValues.getSettingValue(req);

            if (res.settingValueModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettingValues

This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
in a specified Environment identified by the `environmentId` parameter.

The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
The `value` represents what the clients will get when the evaluation requests of our SDKs 
are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.

The `rolloutRules` and `percentageRules` attributes are representing the current 
Targeting and Percentage Rules configuration of the actual Feature Flag or Setting 
in an **ordered** collection, which means the order of the returned rules is matching to the
evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingValuesRequest;
import org.openapis.openapi.models.operations.GetSettingValuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae", "dolores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSettingValuesRequest req = new GetSettingValuesRequest("563f94e2-9e97-43e9-a2a5-7a15be3e0608", "07e2b6e3-ab88-445f-8597-a60ff2a54a31");            

            GetSettingValuesResponse res = sdk.featureFlagAndSettingValues.getSettingValues(req);

            if (res.configSettingValuesModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSettingValues

This endpoint replaces the values of a specified Config's Feature Flags or Settings identified by the `configId` parameter
in a specified Environment identified by the `environmentId` parameter.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change in its original state. Not listing one means that it will reset.

For example: We have the following resource.
```
{
    "settingValues": [
		{
			"rolloutPercentageItems": [
				{
					"percentage": 30,
					"value": true
				},
				{
					"percentage": 70,
					"value": false
				}
			],
			"rolloutRules": [],
			"value": false,
			"settingId": 1
		}
	]
}
```
If we send a replace request body as below:
```
{ 
	"settingValues": [
		{
			"value": true,
			"settingId": 1
		}
	]
}
```
Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"settingValues": [
		{
			"rolloutPercentageItems": [],
			"rolloutRules": [],
			"value": true,
			"setting": 
			{
				"settingId": 1
			}
		}
	]
}
```

The `rolloutRules` property describes two types of rules:

- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSettingValuesRequest;
import org.openapis.openapi.models.operations.PostSettingValuesResponse;
import org.openapis.openapi.models.shared.RolloutPercentageItemModel;
import org.openapis.openapi.models.shared.RolloutRuleComparatorEnum;
import org.openapis.openapi.models.shared.RolloutRuleModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SegmentComparatorEnum;
import org.openapis.openapi.models.shared.UpdateSettingValueWithSettingIdModel;
import org.openapis.openapi.models.shared.UpdateSettingValuesWithIdModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae", "omnis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostSettingValuesRequest req = new PostSettingValuesRequest(                new UpdateSettingValuesWithIdModel() {{
                                settingValues = new org.openapis.openapi.models.shared.UpdateSettingValueWithSettingIdModel[]{{
                                    add(new UpdateSettingValueWithSettingIdModel() {{
                                        rolloutPercentageItems = new org.openapis.openapi.models.shared.RolloutPercentageItemModel[]{{
                                            add(new RolloutPercentageItemModel(633062L) {{
                                                percentage = 403218L;
                                                value = "ut";
                                            }}),
                                            add(new RolloutPercentageItemModel(514513L) {{
                                                percentage = 238413L;
                                                value = "debitis";
                                            }}),
                                        }};
                                        rolloutRules = new org.openapis.openapi.models.shared.RolloutRuleModel[]{{
                                            add(new RolloutRuleModel() {{
                                                comparator = RolloutRuleComparatorEnum.SEM_VER_LESS;
                                                comparisonAttribute = "recusandae";
                                                comparisonValue = "esse";
                                                segmentComparator = SegmentComparatorEnum.IS_NOT_IN;
                                                segmentId = "56f9251a-5a9d-4a66-8ff5-7bfaad4f9efc";
                                                value = "vitae";
                                            }}),
                                            add(new RolloutRuleModel() {{
                                                comparator = RolloutRuleComparatorEnum.NUMBER_LESS;
                                                comparisonAttribute = "tempora";
                                                comparisonValue = "quis";
                                                segmentComparator = SegmentComparatorEnum.IS_IN;
                                                segmentId = "2c103264-8dc2-4f61-9199-ebfd0e9fe6c6";
                                                value = "dolorem";
                                            }}),
                                        }};
                                        settingId = 147808;
                                        value = "cumque";
                                    }}),
                                    add(new UpdateSettingValueWithSettingIdModel() {{
                                        rolloutPercentageItems = new org.openapis.openapi.models.shared.RolloutPercentageItemModel[]{{
                                            add(new RolloutPercentageItemModel(898760L) {{
                                                percentage = 189062L;
                                                value = "animi";
                                            }}),
                                            add(new RolloutPercentageItemModel(97258L) {{
                                                percentage = 862063L;
                                                value = "consequatur";
                                            }}),
                                            add(new RolloutPercentageItemModel(619183L) {{
                                                percentage = 90233L;
                                                value = "ducimus";
                                            }}),
                                        }};
                                        rolloutRules = new org.openapis.openapi.models.shared.RolloutRuleModel[]{{
                                            add(new RolloutRuleModel() {{
                                                comparator = RolloutRuleComparatorEnum.SEM_VER_LESS;
                                                comparisonAttribute = "adipisci";
                                                comparisonValue = "quasi";
                                                segmentComparator = SegmentComparatorEnum.IS_IN;
                                                segmentId = "fde04771-778f-4f61-9017-476360a15db6";
                                                value = "officia";
                                            }}),
                                            add(new RolloutRuleModel() {{
                                                comparator = RolloutRuleComparatorEnum.SEM_VER_LESS;
                                                comparisonAttribute = "aliquid";
                                                comparisonValue = "perferendis";
                                                segmentComparator = SegmentComparatorEnum.IS_IN;
                                                segmentId = "59a1adea-ab58-451d-ac64-5b08b61891ba";
                                                value = "culpa";
                                            }}),
                                            add(new RolloutRuleModel() {{
                                                comparator = RolloutRuleComparatorEnum.IS_ONE_OF;
                                                comparisonAttribute = "sapiente";
                                                comparisonValue = "officiis";
                                                segmentComparator = SegmentComparatorEnum.IS_IN;
                                                segmentId = "ade008e6-f8c5-4f35-8d8c-db5a34181430";
                                                value = "architecto";
                                            }}),
                                        }};
                                        settingId = 24944;
                                        value = "modi";
                                    }}),
                                }};
                            }};, "21813d52-08ec-4e7e-a53b-668451c6c6e2", "05e16dea-b3fe-4c95-b8a6-4584273a8418") {{
                reason = "fugiat";
            }};            

            PostSettingValuesResponse res = sdk.featureFlagAndSettingValues.postSettingValues(req);

            if (res.configSettingValuesModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replaceSettingValue

This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change in its original state. Not listing one means that it will reset.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send a replace request body as below:
```
{
	"value": true
}
```
Then besides that the default value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"rolloutPercentageItems": [],
	"rolloutRules": [],
	"value": true
}
```

The `rolloutRules` property describes two types of rules:

- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplaceSettingValueRequest;
import org.openapis.openapi.models.operations.ReplaceSettingValueResponse;
import org.openapis.openapi.models.shared.RolloutPercentageItemModel;
import org.openapis.openapi.models.shared.RolloutRuleComparatorEnum;
import org.openapis.openapi.models.shared.RolloutRuleModel;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SegmentComparatorEnum;
import org.openapis.openapi.models.shared.UpdateSettingValueModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta", "nisi") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ReplaceSettingValueRequest req = new ReplaceSettingValueRequest(                new UpdateSettingValueModel() {{
                                rolloutPercentageItems = new org.openapis.openapi.models.shared.RolloutPercentageItemModel[]{{
                                    add(new RolloutPercentageItemModel(585432L) {{
                                        percentage = 233078L;
                                        value = "aperiam";
                                    }}),
                                }};
                                rolloutRules = new org.openapis.openapi.models.shared.RolloutRuleModel[]{{
                                    add(new RolloutRuleModel() {{
                                        comparator = RolloutRuleComparatorEnum.NUMBER_LESS_OR_EQUALS;
                                        comparisonAttribute = "alias";
                                        comparisonValue = "omnis";
                                        segmentComparator = SegmentComparatorEnum.IS_IN;
                                        segmentId = "9921aefb-9f58-4c4d-86e6-8e4be056013f";
                                        value = "enim";
                                    }}),
                                    add(new RolloutRuleModel() {{
                                        comparator = RolloutRuleComparatorEnum.NUMBER_EQUALS;
                                        comparisonAttribute = "nulla";
                                        comparisonValue = "deserunt";
                                        segmentComparator = SegmentComparatorEnum.IS_IN;
                                        segmentId = "57a59ecf-ef66-4ef1-8aa3-383c2beb4773";
                                        value = "dignissimos";
                                    }}),
                                    add(new RolloutRuleModel() {{
                                        comparator = RolloutRuleComparatorEnum.DOES_NOT_CONTAIN;
                                        comparisonAttribute = "quo";
                                        comparisonValue = "deleniti";
                                        segmentComparator = SegmentComparatorEnum.IS_NOT_IN;
                                        segmentId = "72f64d1d-b1f2-4c43-9066-1e96349e1cf9";
                                        value = "itaque";
                                    }}),
                                    add(new RolloutRuleModel() {{
                                        comparator = RolloutRuleComparatorEnum.IS_ONE_OF;
                                        comparisonAttribute = "nisi";
                                        comparisonValue = "itaque";
                                        segmentComparator = SegmentComparatorEnum.IS_IN;
                                        segmentId = "a437000a-e6b6-4bc9-b8f7-59eac55a9741";
                                        value = "vero";
                                    }}),
                                }};
                                value = "consectetur";
                            }};, "11352965-bb8a-4720-a611-435e139dbc22", 342137) {{
                reason = "omnis";
            }};            

            ReplaceSettingValueResponse res = sdk.featureFlagAndSettingValues.replaceSettingValue(req);

            if (res.settingValueModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSettingValue

This endpoint updates the value of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change. It supports collection reordering, so it also 
can be used for reordering the targeting rules of a Feature Flag or Setting.

For example: We have the following resource.
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": false
}
```
If we send an update request body as below:
```
[
	{
		"op": "replace",
		"path": "/value",
		"value": true
	}
]
```
Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
So we get a response like this:
```
{
	"rolloutPercentageItems": [
		{
			"percentage": 30,
			"value": true
		},
		{
			"percentage": 70,
			"value": false
		}
	],
	"rolloutRules": [],
	"value": true
}
```

The `rolloutRules` property describes two types of rules:

- **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
- **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSettingValueRequest;
import org.openapis.openapi.models.operations.UpdateSettingValueResponse;
import org.openapis.openapi.models.shared.JsonNode;
import org.openapis.openapi.models.shared.JsonNodeOptions;
import org.openapis.openapi.models.shared.JsonPatchInput;
import org.openapis.openapi.models.shared.JsonPointerInput;
import org.openapis.openapi.models.shared.JsonPointerKindEnum;
import org.openapis.openapi.models.shared.OperationTypeEnum;
import org.openapis.openapi.models.shared.PatchOperationInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero", "dicta") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateSettingValueRequest req = new UpdateSettingValueRequest(                new JsonPatchInput() {{
                                operations = new org.openapis.openapi.models.shared.PatchOperationInput[]{{
                                    add(new PatchOperationInput() {{
                                        from = new JsonPointerInput() {{
                                            kind = JsonPointerKindEnum.URI_ENCODED;
                                        }};
                                        op = OperationTypeEnum.COPY;
                                        path = new JsonPointerInput() {{
                                            kind = JsonPointerKindEnum.PLAIN;
                                        }};
                                        value = new JsonNode() {{
                                            options = new JsonNodeOptions() {{
                                                propertyNameCaseInsensitive = false;
                                            }};
                                            parent = new JsonNode() {{}};
                                            root = new JsonNode() {{}};
                                        }};
                                    }}),
                                    add(new PatchOperationInput() {{
                                        from = new JsonPointerInput() {{
                                            kind = JsonPointerKindEnum.PLAIN;
                                        }};
                                        op = OperationTypeEnum.COPY;
                                        path = new JsonPointerInput() {{
                                            kind = JsonPointerKindEnum.UNSPECIFIED;
                                        }};
                                        value = new JsonNode() {{
                                            options = new JsonNodeOptions() {{
                                                propertyNameCaseInsensitive = false;
                                            }};
                                            parent = new JsonNode() {{}};
                                            root = new JsonNode() {{}};
                                        }};
                                    }}),
                                    add(new PatchOperationInput() {{
                                        from = new JsonPointerInput() {{
                                            kind = JsonPointerKindEnum.PLAIN;
                                        }};
                                        op = OperationTypeEnum.UNKNOWN;
                                        path = new JsonPointerInput() {{
                                            kind = JsonPointerKindEnum.URI_ENCODED;
                                        }};
                                        value = new JsonNode() {{
                                            options = new JsonNodeOptions() {{
                                                propertyNameCaseInsensitive = false;
                                            }};
                                            parent = new JsonNode() {{}};
                                            root = new JsonNode() {{}};
                                        }};
                                    }}),
                                }};
                            }};, "1084cb06-72d1-4ad8-b9ee-b9665b85efbd", 5152) {{
                reason = "quia";
            }};            

            UpdateSettingValueResponse res = sdk.featureFlagAndSettingValues.updateSettingValue(req);

            if (res.settingValueModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
