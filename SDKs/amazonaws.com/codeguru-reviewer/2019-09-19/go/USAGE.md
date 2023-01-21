<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateRepositoryRequest{
        Headers: operations.AssociateRepositoryHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: "voluptas",
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKmsKeyDetails{
                EncryptionOption: "AWS_OWNED_CMK",
                KMSKeyID: "et",
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "nihil",
                    Name: "rerum",
                    Owner: "dicta",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "debitis",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "voluptatum",
                    Name: "et",
                    Owner: "ut",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "dolorem",
                    Name: "et",
                },
            },
            Tags: map[string]string{
                "iste": "vitae",
            },
        },
    }
    
    res, err := s.AssociateRepository(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRepositoryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->