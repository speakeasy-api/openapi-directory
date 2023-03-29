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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: "nulla",
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKMSKeyDetails{
                EncryptionOption: "AWS_OWNED_CMK",
                KMSKeyID: "fuga",
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "facilis",
                    Name: "eum",
                    Owner: "iusto",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "ullam",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "saepe",
                    Name: "inventore",
                    Owner: "sapiente",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "enim",
                    Name: "eum",
                },
            },
            Tags: map[string]string{
                "autem": "vel",
                "non": "deleniti",
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