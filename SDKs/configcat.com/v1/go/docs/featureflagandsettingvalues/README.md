# FeatureFlagAndSettingValues

## Overview

With these endpoints you can control how your existing Feature Flags and Settings should serve their values. 
You can turn Feature Flags on or off, update Setting values and also add, remove or reorder Percentage and Targeting Rules.

To determine which Feature Flag or Setting you want to work with you have to pass its `settingId`. It can be
obtained from the [Feature Flag & Setting](#tag/Feature-Flags-and-Settings) endpoints.

You also have to specify in which Environment you want to change the served value configuration by its
`environmentId` which can be obtained from the [List Environments](#operation/get-environments) endpoint.

### Available Operations

* [GetSettingValue](#getsettingvalue) - Get value
* [GetSettingValues](#getsettingvalues) - Get values
* [PostSettingValues](#postsettingvalues) - Post values
* [ReplaceSettingValue](#replacesettingvalue) - Replace value
* [UpdateSettingValue](#updatesettingvalue) - Update value

## GetSettingValue

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
    res, err := s.FeatureFlagAndSettingValues.GetSettingValue(ctx, operations.GetSettingValueRequest{
        EnvironmentID: "642dac7a-f515-4cc4-93aa-63aae8d67864",
        SettingID: 822560,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingValueModelHaljson != nil {
        // handle response
    }
}
```

## GetSettingValues

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
    res, err := s.FeatureFlagAndSettingValues.GetSettingValues(ctx, operations.GetSettingValuesRequest{
        ConfigID: "bb675fd5-e60b-4375-ad4f-6fbee41f3331",
        EnvironmentID: "7fe35b60-eb1e-4a42-a555-ba3c28744ed5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSettingValuesModel != nil {
        // handle response
    }
}
```

## PostSettingValues

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
    res, err := s.FeatureFlagAndSettingValues.PostSettingValues(ctx, operations.PostSettingValuesRequest{
        UpdateSettingValuesWithIDModel: shared.UpdateSettingValuesWithIDModel{
            SettingValues: []shared.UpdateSettingValueWithSettingIDModel{
                shared.UpdateSettingValueWithSettingIDModel{
                    RolloutPercentageItems: []shared.RolloutPercentageItemModel{
                        shared.RolloutPercentageItemModel{
                            Percentage: 502389,
                            Value: sdk.String("quas"),
                        },
                        shared.RolloutPercentageItemModel{
                            Percentage: 942584,
                            Value: sdk.String("nesciunt"),
                        },
                        shared.RolloutPercentageItemModel{
                            Percentage: 633998,
                            Value: sdk.String("corrupti"),
                        },
                    },
                    RolloutRules: []shared.RolloutRuleModel{
                        shared.RolloutRuleModel{
                            Comparator: shared.RolloutRuleComparatorEnumSemVerGreaterOrEquals.ToPointer(),
                            ComparisonAttribute: sdk.String("hic"),
                            ComparisonValue: sdk.String("exercitationem"),
                            SegmentComparator: shared.SegmentComparatorEnumIsNotIn.ToPointer(),
                            SegmentID: sdk.String("0b2f2fb7-b194-4a27-ab26-916fe1f08f42"),
                            Value: sdk.String("provident"),
                        },
                        shared.RolloutRuleModel{
                            Comparator: shared.RolloutRuleComparatorEnumSemVerIsOneOf.ToPointer(),
                            ComparisonAttribute: sdk.String("necessitatibus"),
                            ComparisonValue: sdk.String("ipsum"),
                            SegmentComparator: shared.SegmentComparatorEnumIsIn.ToPointer(),
                            SegmentID: sdk.String("98f447f6-03e8-4b44-9e80-ca55efd20e45"),
                            Value: sdk.String("in"),
                        },
                        shared.RolloutRuleModel{
                            Comparator: shared.RolloutRuleComparatorEnumSensitiveIsOneOf.ToPointer(),
                            ComparisonAttribute: sdk.String("beatae"),
                            ComparisonValue: sdk.String("laudantium"),
                            SegmentComparator: shared.SegmentComparatorEnumIsIn.ToPointer(),
                            SegmentID: sdk.String("8b6a89fb-e3a5-4aa8-a482-4d0ab4075088"),
                            Value: sdk.String("repudiandae"),
                        },
                        shared.RolloutRuleModel{
                            Comparator: shared.RolloutRuleComparatorEnumSemVerLess.ToPointer(),
                            ComparisonAttribute: sdk.String("et"),
                            ComparisonValue: sdk.String("blanditiis"),
                            SegmentComparator: shared.SegmentComparatorEnumIsIn.ToPointer(),
                            SegmentID: sdk.String("2065e904-f3b1-4194-b8ab-f603a79f9dfe"),
                            Value: sdk.String("perferendis"),
                        },
                    },
                    SettingID: sdk.Int(667285),
                    Value: sdk.String("quidem"),
                },
            },
        },
        ConfigID: "7da8a50c-e187-4f86-bc17-3d689eee9526",
        EnvironmentID: "f8d986e8-81ea-4d4f-8e10-12563f94e29e",
        Reason: sdk.String("perspiciatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfigSettingValuesModel != nil {
        // handle response
    }
}
```

## ReplaceSettingValue

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
    res, err := s.FeatureFlagAndSettingValues.ReplaceSettingValue(ctx, operations.ReplaceSettingValueRequest{
        UpdateSettingValueModel: shared.UpdateSettingValueModel{
            RolloutPercentageItems: []shared.RolloutPercentageItemModel{
                shared.RolloutPercentageItemModel{
                    Percentage: 238043,
                    Value: sdk.String("eveniet"),
                },
                shared.RolloutPercentageItemModel{
                    Percentage: 580887,
                    Value: sdk.String("consequuntur"),
                },
            },
            RolloutRules: []shared.RolloutRuleModel{
                shared.RolloutRuleModel{
                    Comparator: shared.RolloutRuleComparatorEnumNumberDoesNotEqual.ToPointer(),
                    ComparisonAttribute: sdk.String("quis"),
                    ComparisonValue: sdk.String("reprehenderit"),
                    SegmentComparator: shared.SegmentComparatorEnumIsNotIn.ToPointer(),
                    SegmentID: sdk.String("15be3e06-0807-4e2b-ae3a-b8845f0597a6"),
                    Value: sdk.String("alias"),
                },
            },
            Value: sdk.String("maiores"),
        },
        EnvironmentID: "f2a54a31-e947-464a-be86-5e7956f9251a",
        Reason: sdk.String("nostrum"),
        SettingID: 652309,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingValueModelHaljson != nil {
        // handle response
    }
}
```

## UpdateSettingValue

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
    res, err := s.FeatureFlagAndSettingValues.UpdateSettingValue(ctx, operations.UpdateSettingValueRequest{
        JSONPatchInput: shared.JSONPatchInput{
            Operations: []shared.PatchOperationInput{
                shared.PatchOperationInput{
                    From: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumURIEncoded.ToPointer(),
                    },
                    Op: shared.OperationTypeEnumMove.ToPointer(),
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
                shared.PatchOperationInput{
                    From: &shared.JSONPointerInput{
                        Kind: shared.JSONPointerKindEnumURIEncoded.ToPointer(),
                    },
                    Op: shared.OperationTypeEnumRemove.ToPointer(),
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
        EnvironmentID: "bfaad4f9-efc1-4b45-92c1-032648dc2f61",
        Reason: sdk.String("minima"),
        SettingID: 107004,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingValueModelHaljson != nil {
        // handle response
    }
}
```
