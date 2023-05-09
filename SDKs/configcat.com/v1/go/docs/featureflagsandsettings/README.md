# FeatureFlagsAndSettings

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

* [CreateSetting](#createsetting) - Create Flag
* [DeleteSetting](#deletesetting) - Delete Flag
* [GetSetting](#getsetting) - Get Flag
* [GetSettings](#getsettings) - List Flags
* [UpdateSetting](#updatesetting) - Update Flag

## CreateSetting

This endpoint creates a new Feature Flag or Setting in a specified Config
identified by the `configId` parameter.

**Important:** The `key` attribute must be unique within the given Config.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FeatureFlagsAndSettings.CreateSetting(ctx, operations.CreateSettingRequest{
        CreateSettingInitialValues: shared.CreateSettingInitialValues{
            Hint: sdk.String("sapiente"),
            InitialValues: []shared.InitialValue{
                shared.InitialValue{
                    EnvironmentID: sdk.String("1ade008e-6f8c-45f3-90d8-cdb5a3418143"),
                    Value: sdk.String("consequatur"),
                },
                shared.InitialValue{
                    EnvironmentID: sdk.String("10421813-d520-48ec-a7e2-53b668451c6c"),
                    Value: sdk.String("laboriosam"),
                },
                shared.InitialValue{
                    EnvironmentID: sdk.String("e205e16d-eab3-4fec-9578-a64584273a84"),
                    Value: sdk.String("quasi"),
                },
                shared.InitialValue{
                    EnvironmentID: sdk.String("8d162309-fb09-4299-a1ae-fb9f58c4d86e"),
                    Value: sdk.String("commodi"),
                },
            },
            Key: "totam",
            Name: "Edwin Reichert III",
            SettingType: shared.SettingTypeEnumString,
            Tags: []int64{
                93894,
            },
        },
        ConfigID: "3f59da75-7a59-4ecf-af66-ef1caa3383c2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingModelHaljson != nil {
        // handle response
    }
}
```

## DeleteSetting

This endpoint removes a Feature Flag or Setting from a specified Config, 
identified by the `configId` parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FeatureFlagsAndSettings.DeleteSetting(ctx, operations.DeleteSettingRequest{
        SettingID: 746585,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetSetting

This endpoint returns the metadata attributes of a Feature Flag or Setting 
identified by the `settingId` parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FeatureFlagsAndSettings.GetSetting(ctx, operations.GetSettingRequest{
        SettingID: 922757,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingModelHaljson != nil {
        // handle response
    }
}
```

## GetSettings

This endpoint returns the list of the Feature Flags and Settings defined in a 
specified Config, identified by the `configId` parameter.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FeatureFlagsAndSettings.GetSettings(ctx, operations.GetSettingsRequest{
        ConfigID: "b477373c-8d72-4f64-91db-1f2c4310661e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingModelHaljsons != nil {
        // handle response
    }
}
```

## UpdateSetting

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.FeatureFlagsAndSettings.UpdateSetting(ctx, operations.UpdateSettingRequest{
        JSONPatchInput: shared.JSONPatchInput{
            Operations: []shared.PatchOperationInput{
                shared.PatchOperationInput{
                    From: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumPlain.ToPointer(),
                    },
                    Op: shared.OperationTypeEnumAdd.ToPointer(),
                    Path: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumUnspecified.ToPointer(),
                    },
                    Value: &shared.JSONNode{
                        Options: &shared.JSONNodeOptions{
                            PropertyNameCaseInsensitive: sdk.Bool(false),
                        },
                        Parent: &shared.JSONNode{},
                        Root: &shared.JSONNode{},
                    },
                },
                shared.PatchOperationInput{
                    From: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumPlain.ToPointer(),
                    },
                    Op: shared.OperationTypeEnumTest.ToPointer(),
                    Path: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumUnspecified.ToPointer(),
                    },
                    Value: &shared.JSONNode{
                        Options: &shared.JSONNodeOptions{
                            PropertyNameCaseInsensitive: sdk.Bool(false),
                        },
                        Parent: &shared.JSONNode{},
                        Root: &shared.JSONNode{},
                    },
                },
                shared.PatchOperationInput{
                    From: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumURIEncoded.ToPointer(),
                    },
                    Op: shared.OperationTypeEnumTest.ToPointer(),
                    Path: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumPlain.ToPointer(),
                    },
                    Value: &shared.JSONNode{
                        Options: &shared.JSONNodeOptions{
                            PropertyNameCaseInsensitive: sdk.Bool(false),
                        },
                        Parent: &shared.JSONNode{},
                        Root: &shared.JSONNode{},
                    },
                },
            },
        },
        SettingID: 932562,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingModelHaljson != nil {
        // handle response
    }
}
```
