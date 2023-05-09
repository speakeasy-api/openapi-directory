# ReturnPolicy

### Available Operations

* [CreateReturnPolicy](#createreturnpolicy) - This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
* [DeleteReturnPolicy](#deletereturnpolicy) - This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.
* [GetReturnPolicies](#getreturnpolicies) - This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [GetReturnPolicy](#getreturnpolicy) - This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.
* [GetReturnPolicyByName](#getreturnpolicybyname) - This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [UpdateReturnPolicy](#updatereturnpolicy) - This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## CreateReturnPolicy

This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ReturnPolicy.CreateReturnPolicy(ctx, shared.ReturnPolicyRequest{
        CategoryTypes: []shared.CategoryType{
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Meghan Wiegand"),
            },
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Jermaine Kuhic"),
            },
        },
        Description: sdk.String("vero"),
        ExtendedHolidayReturnsOffered: sdk.Bool(false),
        InternationalOverride: &shared.InternationalReturnOverrideType{
            ReturnMethod: sdk.String("ducimus"),
            ReturnPeriod: &shared.TimeDuration{
                Unit: sdk.String("dolore"),
                Value: sdk.Int(844550),
            },
            ReturnShippingCostPayer: sdk.String("illum"),
            ReturnsAccepted: sdk.Bool(false),
        },
        MarketplaceID: sdk.String("sequi"),
        Name: sdk.String("Edmund Ankunding"),
        RefundMethod: sdk.String("nulla"),
        RestockingFeePercentage: sdk.String("fugit"),
        ReturnInstructions: sdk.String("porro"),
        ReturnMethod: sdk.String("maiores"),
        ReturnPeriod: &shared.TimeDuration{
            Unit: sdk.String("doloribus"),
            Value: sdk.Int(478370),
        },
        ReturnShippingCostPayer: sdk.String("eligendi"),
        ReturnsAccepted: sdk.Bool(false),
    }, operations.CreateReturnPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetReturnPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteReturnPolicy

This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ReturnPolicy.DeleteReturnPolicy(ctx, operations.DeleteReturnPolicyRequest{
        ReturnPolicyID: "ducimus",
    }, operations.DeleteReturnPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetReturnPolicies

This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ReturnPolicy.GetReturnPolicies(ctx, operations.GetReturnPoliciesRequest{
        MarketplaceID: "alias",
    }, operations.GetReturnPoliciesSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnPolicyResponse != nil {
        // handle response
    }
}
```

## GetReturnPolicy

This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ReturnPolicy.GetReturnPolicy(ctx, operations.GetReturnPolicyRequest{
        ReturnPolicyID: "officia",
    }, operations.GetReturnPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnPolicy != nil {
        // handle response
    }
}
```

## GetReturnPolicyByName

This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ReturnPolicy.GetReturnPolicyByName(ctx, operations.GetReturnPolicyByNameRequest{
        MarketplaceID: "tempora",
        Name: "Terri Collins",
    }, operations.GetReturnPolicyByNameSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReturnPolicy != nil {
        // handle response
    }
}
```

## UpdateReturnPolicy

This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ReturnPolicy.UpdateReturnPolicy(ctx, operations.UpdateReturnPolicyRequest{
        ReturnPolicyRequest: shared.ReturnPolicyRequest{
            CategoryTypes: []shared.CategoryType{
                shared.CategoryType{
                    Default: sdk.Bool(false),
                    Name: sdk.String("Mrs. Vicki Langosh"),
                },
                shared.CategoryType{
                    Default: sdk.Bool(false),
                    Name: sdk.String("Rosemary Stoltenberg"),
                },
            },
            Description: sdk.String("nostrum"),
            ExtendedHolidayReturnsOffered: sdk.Bool(false),
            InternationalOverride: &shared.InternationalReturnOverrideType{
                ReturnMethod: sdk.String("sapiente"),
                ReturnPeriod: &shared.TimeDuration{
                    Unit: sdk.String("quisquam"),
                    Value: sdk.Int(906556),
                },
                ReturnShippingCostPayer: sdk.String("ea"),
                ReturnsAccepted: sdk.Bool(false),
            },
            MarketplaceID: sdk.String("impedit"),
            Name: sdk.String("Mrs. Sally Jacobi"),
            RefundMethod: sdk.String("quo"),
            RestockingFeePercentage: sdk.String("consectetur"),
            ReturnInstructions: sdk.String("recusandae"),
            ReturnMethod: sdk.String("aspernatur"),
            ReturnPeriod: &shared.TimeDuration{
                Unit: sdk.String("minima"),
                Value: sdk.Int(53427),
            },
            ReturnShippingCostPayer: sdk.String("a"),
            ReturnsAccepted: sdk.Bool(false),
        },
        ReturnPolicyID: "libero",
    }, operations.UpdateReturnPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetReturnPolicyResponse != nil {
        // handle response
    }
}
```
