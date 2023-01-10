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
            XAmzAlgorithm: "voluptas",
            XAmzContentSha256: "nulla",
            XAmzCredential: "numquam",
            XAmzDate: "et",
            XAmzSecurityToken: "officiis",
            XAmzSignature: "sequi",
            XAmzSignedHeaders: "vel",
        },
        Request: operations.AssociateRepositoryRequestBody{
            ClientRequestToken: "et",
            KMSKeyDetails: &operations.AssociateRepositoryRequestBodyKmsKeyDetails{
                EncryptionOption: "AWS_OWNED_CMK",
                KMSKeyID: "aliquid",
            },
            Repository: operations.AssociateRepositoryRequestBodyRepository{
                Bitbucket: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "autem",
                    Name: "asperiores",
                    Owner: "tempora",
                },
                CodeCommit: &shared.CodeCommitRepository{
                    Name: "voluptate",
                },
                GitHubEnterpriseServer: &shared.ThirdPartySourceRepository{
                    ConnectionArn: "est",
                    Name: "nostrum",
                    Owner: "mollitia",
                },
                S3Bucket: &shared.S3Repository{
                    BucketName: "aut",
                    Name: "recusandae",
                },
            },
            Tags: map[string]string{
                "quas": "repellendus",
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