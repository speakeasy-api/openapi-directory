# featureFlagAndSettingValuesUsingSDKKey

## Overview

With these endpoints you can control how your existing Feature Flags and Settings should serve their values. 
You can turn Feature Flags on or off, update Setting values and also add, remove or change the order of Percentage and Targeting Rules.

These endpoints are determining the Environment and Config by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in
the `X-CONFIGCAT-SDKKEY` request header. To identify the desired Feature Flag or Setting to change, 
you can use either its `settingId` or `key` attribute. You can get those attributes 
from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.

### Available Operations

* [getSettingValueBySdkkey](#getsettingvaluebysdkkey) - Get value
* [replaceSettingValueBySdkkey](#replacesettingvaluebysdkkey) - Replace value
* [updateSettingValueBySdkkey](#updatesettingvaluebysdkkey) - Update value

## getSettingValueBySdkkey

This endpoint returns the value of a Feature Flag or Setting 
in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

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
import org.openapis.openapi.models.operations.GetSettingValueBySdkkeyRequest;
import org.openapis.openapi.models.operations.GetSettingValueBySdkkeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "fuga") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSettingValueBySdkkeyRequest req = new GetSettingValueBySdkkeyRequest("repudiandae") {{
                xConfigcatSdkkey = "accusantium";
            }};            

            GetSettingValueBySdkkeyResponse res = sdk.featureFlagAndSettingValuesUsingSDKKey.getSettingValueBySdkkey(req);

            if (res.settingValueModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## replaceSettingValueBySdkkey

This endpoint replaces the value of a Feature Flag or Setting 
in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.

**Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't 
want to change to its original state. Not listing one means that it will reset.

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
Then besides that the default served value is set to `true`, all the Percentage Rules are deleted. 
So we get a response like this:
```
{
	"rolloutPercentageItems": [],
	"rolloutRules": [],
	"value": true
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReplaceSettingValueBySdkkeyRequest;
import org.openapis.openapi.models.operations.ReplaceSettingValueBySdkkeyResponse;
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
                .setSecurity(new Security("expedita", "officiis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            ReplaceSettingValueBySdkkeyRequest req = new ReplaceSettingValueBySdkkeyRequest(                new UpdateSettingValueModel() {{
                                rolloutPercentageItems = new org.openapis.openapi.models.shared.RolloutPercentageItemModel[]{{
                                    add(new RolloutPercentageItemModel(510128L) {{
                                        percentage = 844854L;
                                        value = "odio";
                                    }}),
                                }};
                                rolloutRules = new org.openapis.openapi.models.shared.RolloutRuleModel[]{{
                                    add(new RolloutRuleModel() {{
                                        comparator = RolloutRuleComparatorEnum.CONTAINS;
                                        comparisonAttribute = "corporis";
                                        comparisonValue = "error";
                                        segmentComparator = SegmentComparatorEnum.IS_NOT_IN;
                                        segmentId = "3ea4b519-7f92-4443-9a7c-e52b895c537c";
                                        value = "eum";
                                    }}),
                                }};
                                value = "modi";
                            }};, "corporis") {{
                xConfigcatSdkkey = "magnam";
                reason = "voluptates";
            }};            

            ReplaceSettingValueBySdkkeyResponse res = sdk.featureFlagAndSettingValuesUsingSDKKey.replaceSettingValueBySdkkey(req);

            if (res.settingValueModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSettingValueBySdkkey

This endpoint updates the value of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.

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
Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
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

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSettingValueBySdkkeyRequest;
import org.openapis.openapi.models.operations.UpdateSettingValueBySdkkeyResponse;
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
                .setSecurity(new Security("maiores", "tempore") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateSettingValueBySdkkeyRequest req = new UpdateSettingValueBySdkkeyRequest(                new JsonPatchInput() {{
                                operations = new org.openapis.openapi.models.shared.PatchOperationInput[]{{
                                    add(new PatchOperationInput() {{
                                        from = new JsonPointerInput() {{
                                            kind = JsonPointerKindEnum.URI_ENCODED;
                                        }};
                                        op = OperationTypeEnum.ADD;
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
                                }};
                            }};, "totam") {{
                xConfigcatSdkkey = "occaecati";
                reason = "voluptas";
            }};            

            UpdateSettingValueBySdkkeyResponse res = sdk.featureFlagAndSettingValuesUsingSDKKey.updateSettingValueBySdkkey(req);

            if (res.settingValueModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
