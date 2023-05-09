<!-- Start SDK Example Usage -->
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
    res, err := s.AssociateRepository(ctx, operations.AssociateRepositoryRequest{
        RequestBody: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: sdk.String("corrupti"),
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKMSKeyDetails{
                EncryptionOption: shared.EncryptionOptionEnumCustomerManagedCmk.ToPointer(),
                KMSKeyID: sdk.String("distinctio"),
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "quibusdam",
                    Name: "Ismael Little",
                    Owner: "error",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "Rick Kertzmann",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "ipsa",
                    Name: "Ricky Hoppe",
                    Owner: "placeat",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "voluptatum",
                    Name: "Miriam Huel",
                },
            },
            Tags: map[string]string{
                "quis": "veritatis",
            },
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("repellendus"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRepositoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->