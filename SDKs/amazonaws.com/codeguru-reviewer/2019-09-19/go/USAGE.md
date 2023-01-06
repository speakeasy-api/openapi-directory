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
            XAmzAlgorithm: "explicabo",
            XAmzContentSha256: "omnis",
            XAmzCredential: "ut",
            XAmzDate: "libero",
            XAmzSecurityToken: "consequatur",
            XAmzSignature: "qui",
            XAmzSignedHeaders: "sit",
        },
        Request: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: "quasi",
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKmsKeyDetails{
                EncryptionOption: "AWS_OWNED_CMK",
                KMSKeyID: "voluptate",
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "ut",
                    Name: "deserunt",
                    Owner: "sed",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "sint",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "est",
                    Name: "est",
                    Owner: "omnis",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "reiciendis",
                    Name: "ipsam",
                },
            },
            Tags: map[string]string{
                "et": "molestias",
                "minus": "pariatur",
                "voluptatum": "tenetur",
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