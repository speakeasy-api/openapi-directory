# SDK

## Overview

<fullname>AWS Marketplace Entitlement Service</fullname> <p>This reference provides descriptions of the AWS Marketplace Entitlement Service API.</p> <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p> <p> <b>Getting Entitlement Records</b> </p> <ul> <li> <p> <i>GetEntitlements</i>- Gets the entitlements for a Marketplace product.</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/marketplace/>
### Available Operations

* [GetEntitlements](#getentitlements) - GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.

## GetEntitlements

GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.

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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetEntitlements(ctx, operations.GetEntitlementsRequest{
        GetEntitlementsRequest: shared.GetEntitlementsRequest{
            Filter: map[string][]string{
                "temporibus": []string{
                    "quis",
                },
                "veritatis": []string{
                    "perferendis",
                    "ipsam",
                    "repellendus",
                },
                "sapiente": []string{
                    "odit",
                    "at",
                    "at",
                    "maiores",
                },
                "molestiae": []string{
                    "quod",
                    "esse",
                    "totam",
                    "porro",
                },
            },
            MaxResults: sdk.Int64(678880),
            NextToken: sdk.String("dicta"),
            ProductCode: "nam",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("deleniti"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("totam"),
        XAmzTarget: operations.GetEntitlementsXAmzTargetEnumAwsmpEntitlementServiceGetEntitlements,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEntitlementsResult != nil {
        // handle response
    }
}
```
