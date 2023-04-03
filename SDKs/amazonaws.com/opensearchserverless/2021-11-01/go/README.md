# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/opensearchserverless/2021-11-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

    req := operations.BatchGetCollectionRequest{
        BatchGetCollectionRequest: shared.BatchGetCollectionRequest{
            Ids: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Names: []string{
                "nulla",
                "corrupti",
                "illum",
            },
        },
        XAmzAlgorithm: "vel",
        XAmzContentSha256: "error",
        XAmzCredential: "deserunt",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "iure",
        XAmzSignature: "magnam",
        XAmzSignedHeaders: "debitis",
        XAmzTarget: "OpenSearchServerless.BatchGetCollection",
    }

    ctx := context.Background()
    res, err := s.BatchGetCollection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetCollectionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `BatchGetCollection` - Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* `BatchGetVpcEndpoint` - Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* `CreateAccessPolicy` - Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* `CreateCollection` - Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* `CreateSecurityConfig` - Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 
* `CreateSecurityPolicy` - Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* `CreateVpcEndpoint` - Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* `DeleteAccessPolicy` - Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* `DeleteCollection` - Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* `DeleteSecurityConfig` - Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* `DeleteSecurityPolicy` - Deletes an OpenSearch Serverless security policy.
* `DeleteVpcEndpoint` - Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* `GetAccessPolicy` - Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* `GetAccountSettings` - Returns account-level settings related to OpenSearch Serverless.
* `GetPoliciesStats` - Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
* `GetSecurityConfig` - Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* `GetSecurityPolicy` - Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* `ListAccessPolicies` - Returns information about a list of OpenSearch Serverless access policies.
* `ListCollections` - <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>
* `ListSecurityConfigs` - Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* `ListSecurityPolicies` - Returns information about configured OpenSearch Serverless security policies.
* `ListTagsForResource` - Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* `ListVpcEndpoints` - Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* `TagResource` - Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* `UntagResource` - Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* `UpdateAccessPolicy` - Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* `UpdateAccountSettings` - Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
* `UpdateCollection` - Updates an OpenSearch Serverless collection.
* `UpdateSecurityConfig` - Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* `UpdateSecurityPolicy` - Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* `UpdateVpcEndpoint` - Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
