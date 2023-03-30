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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateRepositoryRequest{
        Headers: operations.AssociateRepositoryHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: "illum",
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKMSKeyDetails{
                EncryptionOption: "AWS_OWNED_CMK",
                KMSKeyID: "error",
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "deserunt",
                    Name: "suscipit",
                    Owner: "iure",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "magnam",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "debitis",
                    Name: "ipsa",
                    Owner: "delectus",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "tempora",
                    Name: "suscipit",
                },
            },
            Tags: map[string]string{
                "minus": "placeat",
                "voluptatum": "iusto",
            },
        },
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