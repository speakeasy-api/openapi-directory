# FeatureFlagAndSettingValuesUsingSDKKey

## Overview

With these endpoints you can control how your existing Feature Flags and Settings should serve their values. 
You can turn Feature Flags on or off, update Setting values and also add, remove or change the order of Percentage and Targeting Rules.

These endpoints are determining the Environment and Config by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in
the `X-CONFIGCAT-SDKKEY` request header. To identify the desired Feature Flag or Setting to change, 
you can use either its `settingId` or `key` attribute. You can get those attributes 
from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.

### Available Operations

* [GetSettingValueBySdkkey](#getsettingvaluebysdkkey) - Get value
* [ReplaceSettingValueBySdkkey](#replacesettingvaluebysdkkey) - Replace value
* [UpdateSettingValueBySdkkey](#updatesettingvaluebysdkkey) - Update value

## GetSettingValueBySdkkey

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
    res, err := s.FeatureFlagAndSettingValuesUsingSDKKey.GetSettingValueBySdkkey(ctx, operations.GetSettingValueBySdkkeyRequest{
        XConfigcatSdkkey: sdk.String("cupiditate"),
        SettingKeyOrID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingValueModelHaljson != nil {
        // handle response
    }
}
```

## ReplaceSettingValueBySdkkey

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
    res, err := s.FeatureFlagAndSettingValuesUsingSDKKey.ReplaceSettingValueBySdkkey(ctx, operations.ReplaceSettingValueBySdkkeyRequest{
        UpdateSettingValueModel: shared.UpdateSettingValueModel{
            RolloutPercentageItems: []shared.RolloutPercentageItemModel{
                shared.RolloutPercentageItemModel{
                    Percentage: 745398,
                    Value: sdk.String("hic"),
                },
                shared.RolloutPercentageItemModel{
                    Percentage: 848151,
                    Value: sdk.String("eaque"),
                },
                shared.RolloutPercentageItemModel{
                    Percentage: 935833,
                    Value: sdk.String("perspiciatis"),
                },
                shared.RolloutPercentageItemModel{
                    Percentage: 983427,
                    Value: sdk.String("debitis"),
                },
            },
            RolloutRules: []shared.RolloutRuleModel{
                shared.RolloutRuleModel{
                    Comparator: shared.RolloutRuleComparatorEnumNumberGreater.ToPointer(),
                    ComparisonAttribute: sdk.String("suscipit"),
                    ComparisonValue: sdk.String("dolorem"),
                    SegmentComparator: shared.SegmentComparatorEnumIsIn.ToPointer(),
                    SegmentID: sdk.String("ca3aed01-1799-4631-afde-04771778ff61"),
                    Value: sdk.String("fugiat"),
                },
                shared.RolloutRuleModel{
                    Comparator: shared.RolloutRuleComparatorEnumIsOneOf.ToPointer(),
                    ComparisonAttribute: sdk.String("dicta"),
                    ComparisonValue: sdk.String("odio"),
                    SegmentComparator: shared.SegmentComparatorEnumIsIn.ToPointer(),
                    SegmentID: sdk.String("76360a15-db6a-4660-a59a-1adeaab5851d"),
                    Value: sdk.String("ex"),
                },
            },
            Value: sdk.String("quo"),
        },
        XConfigcatSdkkey: sdk.String("ex"),
        Reason: sdk.String("ut"),
        SettingKeyOrID: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingValueModelHaljson != nil {
        // handle response
    }
}
```

## UpdateSettingValueBySdkkey

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
    res, err := s.FeatureFlagAndSettingValuesUsingSDKKey.UpdateSettingValueBySdkkey(ctx, operations.UpdateSettingValueBySdkkeyRequest{
        JSONPatchInput: shared.JSONPatchInput{
            Operations: []shared.PatchOperationInput{
                shared.PatchOperationInput{
                    From: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumUnspecified.ToPointer(),
                    },
                    Op: shared.OperationTypeEnumReplace.ToPointer(),
                    Path: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumURIEncoded.ToPointer(),
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
                    Op: shared.OperationTypeEnumUnknown.ToPointer(),
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
                shared.PatchOperationInput{
                    From: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumPlain.ToPointer(),
                    },
                    Op: shared.OperationTypeEnumUnknown.ToPointer(),
                    Path: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumURIEncoded.ToPointer(),
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
        XConfigcatSdkkey: sdk.String("est"),
        Reason: sdk.String("culpa"),
        SettingKeyOrID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingValueModelHaljson != nil {
        // handle response
    }
}
```
