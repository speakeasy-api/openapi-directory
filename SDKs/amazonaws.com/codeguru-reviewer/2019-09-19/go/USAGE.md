<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateRepositoryRequest{
        RequestBody: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: "corrupti",
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKMSKeyDetails{
                EncryptionOption: "CUSTOMER_MANAGED_CMK",
                KMSKeyID: "distinctio",
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "quibusdam",
                    Name: "unde",
                    Owner: "nulla",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "corrupti",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "illum",
                    Name: "vel",
                    Owner: "error",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "deserunt",
                    Name: "suscipit",
                },
            },
            Tags: map[string]string{
                "magnam": "debitis",
                "ipsa": "delectus",
            },
        },
        XAmzAlgorithm: "tempora",
        XAmzContentSha256: "suscipit",
        XAmzCredential: "molestiae",
        XAmzDate: "minus",
        XAmzSecurityToken: "placeat",
        XAmzSignature: "voluptatum",
        XAmzSignedHeaders: "iusto",
    }

    ctx := context.Background()
    res, err := s.AssociateRepository(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRepositoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->