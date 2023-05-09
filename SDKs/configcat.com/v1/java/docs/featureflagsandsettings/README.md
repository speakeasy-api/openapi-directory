# featureFlagsAndSettings

## Overview

With these endpoints you can manage your Feature Flags or Settings within a Config. 
However you can't use them for manipulating the values of your Feature Flags and Settings,
to do that please visit the [Feature Flag & Setting values using SDK Key](#tag/Feature-Flag-and-Setting-values-using-SDK-Key)
and [Feature Flag & Setting values](#tag/Feature-Flag-and-Setting-values) sections of the API.

For using these endpoints, first you have to select which Config you want to work with by its `configId` 
which can be obtained from the [List Configs](#operation/get-configs) endpoint. 
Then you can use it to create new Feature Flags or to get information about existing ones.

Then you can obtain the `settingId` or `key` of your desired Feature Flag or Setting 
to use them for further operations in this API. 

<a href="https://configcat.com/docs/main-concepts/#setting" target="_blank" rel="noopener noreferrer">Here</a> you can read more about the concept of Settings.

### Available Operations

* [createSetting](#createsetting) - Create Flag
* [deleteSetting](#deletesetting) - Delete Flag
* [getSetting](#getsetting) - Get Flag
* [getSettings](#getsettings) - List Flags
* [updateSetting](#updatesetting) - Update Flag

## createSetting

This endpoint creates a new Feature Flag or Setting in a specified Config
identified by the `configId` parameter.

**Important:** The `key` attribute must be unique within the given Config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSettingRequest;
import org.openapis.openapi.models.operations.CreateSettingResponse;
import org.openapis.openapi.models.shared.CreateSettingInitialValues;
import org.openapis.openapi.models.shared.InitialValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SettingTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo", "velit") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CreateSettingRequest req = new CreateSettingRequest(                new CreateSettingInitialValues("minus", "fuga", SettingTypeEnum.STRING) {{
                                hint = "est";
                                initialValues = new org.openapis.openapi.models.shared.InitialValue[]{{
                                    add(new InitialValue() {{
                                        environmentId = "fbe2fd57-0757-4792-9177-deac646ecb57";
                                        value = "dolorem";
                                    }}),
                                    add(new InitialValue() {{
                                        environmentId = "409e3eb1-e5a2-4b12-ab07-f116db99545f";
                                        value = "eligendi";
                                    }}),
                                    add(new InitialValue() {{
                                        environmentId = "95fa8897-0e18-49db-b30f-cb33ea055b19";
                                        value = "molestiae";
                                    }}),
                                    add(new InitialValue() {{
                                        environmentId = "cd44e2f5-2d82-4d35-93bb-6f48b656bcdb";
                                        value = "ipsum";
                                    }}),
                                }};
                                tags = new Long[]{{
                                    add(973819L),
                                    add(974589L),
                                }};
                            }};, "2e4b2753-7a8c-4d9e-b319-c177d525f77b");            

            CreateSettingResponse res = sdk.featureFlagsAndSettings.createSetting(req);

            if (res.settingModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSetting

This endpoint removes a Feature Flag or Setting from a specified Config, 
identified by the `configId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSettingRequest;
import org.openapis.openapi.models.operations.DeleteSettingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo", "ab") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteSettingRequest req = new DeleteSettingRequest(280114);            

            DeleteSettingResponse res = sdk.featureFlagsAndSettings.deleteSetting(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetting

This endpoint returns the metadata attributes of a Feature Flag or Setting 
identified by the `settingId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingRequest;
import org.openapis.openapi.models.operations.GetSettingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus", "saepe") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSettingRequest req = new GetSettingRequest(734814);            

            GetSettingResponse res = sdk.featureFlagsAndSettings.getSetting(req);

            if (res.settingModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettings

This endpoint returns the list of the Feature Flags and Settings defined in a 
specified Config, identified by the `configId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsRequest;
import org.openapis.openapi.models.operations.GetSettingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam", "eos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSettingsRequest req = new GetSettingsRequest("ff785fc3-7814-4d4c-98e0-c2bb89eb75da");            

            GetSettingsResponse res = sdk.featureFlagsAndSettings.getSettings(req);

            if (res.settingModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSetting

This endpoint updates the metadata of a Feature Flag or Setting 
with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.

Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.

The advantage of using JSON Patch is that you can describe individual update operations on a resource
without touching attributes that you don't want to change.

For example: We have the following resource.
```
{
	"settingId": 5345,
	"key": "myGrandFeature",
	"name": "Tihs is a naem with soem typos.",
	"hint": "This flag controls my grandioso feature.",
	"settingType": "boolean",
	"tags": [
		{
			"tagId": 0,
			"name": "sample tag",
			"color": "whale"
		}
	]
}
```
If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
```
[
	{
		"op": "replace",
		"path": "/name",
		"value": "This is the name without typos."
	},
	{
		"op": "add",
		"path": "/tags/-",
		"value": 2
	}
]
```
Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
So we get a response like this:
```
{
	"settingId": 5345,
	"key": "myGrandFeature",
	"name": "This is the name without typos.",
	"hint": "This flag controls my grandioso feature.",
	"settingType": "boolean",
	"tags": [
		{
			"tagId": 0,
			"name": "sample tag",
			"color": "whale"
		},
		{
			"tagId": 2,
			"name": "another tag",
			"color": "koala"
		}
	]
}
```

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSettingRequest;
import org.openapis.openapi.models.operations.UpdateSettingResponse;
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
                .setSecurity(new Security("repellendus", "iure") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateSettingRequest req = new UpdateSettingRequest(                new JsonPatchInput() {{
                                operations = new org.openapis.openapi.models.shared.PatchOperationInput[]{{
                                    add(new PatchOperationInput() {{
                                        from = new JsonPointerInput() {{
                                            kind = JsonPointerKindEnum.PLAIN;
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
                                }};
                            }};, 12171);            

            UpdateSettingResponse res = sdk.featureFlagsAndSettings.updateSetting(req);

            if (res.settingModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
