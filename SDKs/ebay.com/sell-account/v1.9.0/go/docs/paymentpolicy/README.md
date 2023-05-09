# PaymentPolicy

### Available Operations

* [CreatePaymentPolicy](#createpaymentpolicy) - This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
* [DeletePaymentPolicy](#deletepaymentpolicy) - This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter. 
* [GetPaymentPolicies](#getpaymentpolicies) - This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [GetPaymentPolicy](#getpaymentpolicy) - This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.
* [GetPaymentPolicyByName](#getpaymentpolicybyname) - This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [UpdatePaymentPolicy](#updatepaymentpolicy) - This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## CreatePaymentPolicy

This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>

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
    res, err := s.PaymentPolicy.CreatePaymentPolicy(ctx, shared.PaymentPolicyRequest{
        CategoryTypes: []shared.CategoryType{
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Jessie Emmerich"),
            },
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Mrs. Ray Collins"),
            },
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Tommy Turner"),
            },
        },
        Deposit: &shared.Deposit{
            Amount: &shared.Amount{
                Currency: sdk.String("provident"),
                Value: sdk.String("minima"),
            },
            DueIn: &shared.TimeDuration{
                Unit: sdk.String("repellendus"),
                Value: sdk.Int(519711),
            },
            PaymentMethods: []shared.PaymentMethod{
                shared.PaymentMethod{
                    Brands: []string{
                        "at",
                    },
                    PaymentMethodType: sdk.String("quaerat"),
                    RecipientAccountReference: &shared.RecipientAccountReference{
                        ReferenceID: sdk.String("tempora"),
                        ReferenceType: sdk.String("vel"),
                    },
                },
                shared.PaymentMethod{
                    Brands: []string{
                        "officiis",
                        "qui",
                        "dolorum",
                        "a",
                    },
                    PaymentMethodType: sdk.String("esse"),
                    RecipientAccountReference: &shared.RecipientAccountReference{
                        ReferenceID: sdk.String("harum"),
                        ReferenceType: sdk.String("iusto"),
                    },
                },
                shared.PaymentMethod{
                    Brands: []string{
                        "quisquam",
                    },
                    PaymentMethodType: sdk.String("tenetur"),
                    RecipientAccountReference: &shared.RecipientAccountReference{
                        ReferenceID: sdk.String("amet"),
                        ReferenceType: sdk.String("tempore"),
                    },
                },
            },
        },
        Description: sdk.String("accusamus"),
        FullPaymentDueIn: &shared.TimeDuration{
            Unit: sdk.String("numquam"),
            Value: sdk.Int(313692),
        },
        ImmediatePay: sdk.Bool(false),
        MarketplaceID: sdk.String("dolorem"),
        Name: sdk.String("Miss Jimmie Kozey"),
        PaymentInstructions: sdk.String("sed"),
        PaymentMethods: []shared.PaymentMethod{
            shared.PaymentMethod{
                Brands: []string{
                    "voluptas",
                    "deserunt",
                    "quam",
                },
                PaymentMethodType: sdk.String("ipsum"),
                RecipientAccountReference: &shared.RecipientAccountReference{
                    ReferenceID: sdk.String("incidunt"),
                    ReferenceType: sdk.String("qui"),
                },
            },
            shared.PaymentMethod{
                Brands: []string{
                    "maxime",
                    "pariatur",
                    "soluta",
                },
                PaymentMethodType: sdk.String("dicta"),
                RecipientAccountReference: &shared.RecipientAccountReference{
                    ReferenceID: sdk.String("laborum"),
                    ReferenceType: sdk.String("totam"),
                },
            },
        },
    }, operations.CreatePaymentPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetPaymentPolicyResponse != nil {
        // handle response
    }
}
```

## DeletePaymentPolicy

This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter. 

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
    res, err := s.PaymentPolicy.DeletePaymentPolicy(ctx, operations.DeletePaymentPolicyRequest{
        PaymentPolicyID: "incidunt",
    }, operations.DeletePaymentPolicySecurity{
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

## GetPaymentPolicies

This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

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
    res, err := s.PaymentPolicy.GetPaymentPolicies(ctx, operations.GetPaymentPoliciesRequest{
        MarketplaceID: "aspernatur",
    }, operations.GetPaymentPoliciesSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentPolicyResponse != nil {
        // handle response
    }
}
```

## GetPaymentPolicy

This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.

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
    res, err := s.PaymentPolicy.GetPaymentPolicy(ctx, operations.GetPaymentPolicyRequest{
        PaymentPolicyID: "dolores",
    }, operations.GetPaymentPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentPolicy != nil {
        // handle response
    }
}
```

## GetPaymentPolicyByName

This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

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
    res, err := s.PaymentPolicy.GetPaymentPolicyByName(ctx, operations.GetPaymentPolicyByNameRequest{
        MarketplaceID: "distinctio",
        Name: "Gilbert Kohler",
    }, operations.GetPaymentPolicyByNameSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaymentPolicy != nil {
        // handle response
    }
}
```

## UpdatePaymentPolicy

This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

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
    res, err := s.PaymentPolicy.UpdatePaymentPolicy(ctx, operations.UpdatePaymentPolicyRequest{
        PaymentPolicyRequest: shared.PaymentPolicyRequest{
            CategoryTypes: []shared.CategoryType{
                shared.CategoryType{
                    Default: sdk.Bool(false),
                    Name: sdk.String("Beverly Cummerata II"),
                },
            },
            Deposit: &shared.Deposit{
                Amount: &shared.Amount{
                    Currency: sdk.String("nam"),
                    Value: sdk.String("hic"),
                },
                DueIn: &shared.TimeDuration{
                    Unit: sdk.String("voluptatem"),
                    Value: sdk.Int(765326),
                },
                PaymentMethods: []shared.PaymentMethod{
                    shared.PaymentMethod{
                        Brands: []string{
                            "et",
                            "saepe",
                            "ipsum",
                        },
                        PaymentMethodType: sdk.String("veritatis"),
                        RecipientAccountReference: &shared.RecipientAccountReference{
                            ReferenceID: sdk.String("nobis"),
                            ReferenceType: sdk.String("quos"),
                        },
                    },
                    shared.PaymentMethod{
                        Brands: []string{
                            "cupiditate",
                            "aperiam",
                            "delectus",
                        },
                        PaymentMethodType: sdk.String("dolorem"),
                        RecipientAccountReference: &shared.RecipientAccountReference{
                            ReferenceID: sdk.String("dolore"),
                            ReferenceType: sdk.String("labore"),
                        },
                    },
                    shared.PaymentMethod{
                        Brands: []string{
                            "dolorum",
                        },
                        PaymentMethodType: sdk.String("architecto"),
                        RecipientAccountReference: &shared.RecipientAccountReference{
                            ReferenceID: sdk.String("quae"),
                            ReferenceType: sdk.String("aut"),
                        },
                    },
                },
            },
            Description: sdk.String("quas"),
            FullPaymentDueIn: &shared.TimeDuration{
                Unit: sdk.String("itaque"),
                Value: sdk.Int(9240),
            },
            ImmediatePay: sdk.Bool(false),
            MarketplaceID: sdk.String("est"),
            Name: sdk.String("Sherman Wyman"),
            PaymentInstructions: sdk.String("cupiditate"),
            PaymentMethods: []shared.PaymentMethod{
                shared.PaymentMethod{
                    Brands: []string{
                        "laudantium",
                    },
                    PaymentMethodType: sdk.String("odio"),
                    RecipientAccountReference: &shared.RecipientAccountReference{
                        ReferenceID: sdk.String("occaecati"),
                        ReferenceType: sdk.String("voluptatibus"),
                    },
                },
            },
        },
        PaymentPolicyID: "quisquam",
    }, operations.UpdatePaymentPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetPaymentPolicyResponse != nil {
        // handle response
    }
}
```
