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
    res, err := s.BatchGetCollection(ctx, operations.BatchGetCollectionRequest{
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
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.BatchGetCollectionXAmzTargetEnumOpenSearchServerlessBatchGetCollection,
    })
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

### [SDK](docs/sdk/README.md)

* [BatchGetCollection](docs/sdk/README.md#batchgetcollection) - Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [BatchGetVpcEndpoint](docs/sdk/README.md#batchgetvpcendpoint) - Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [CreateAccessPolicy](docs/sdk/README.md#createaccesspolicy) - Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [CreateCollection](docs/sdk/README.md#createcollection) - Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [CreateSecurityConfig](docs/sdk/README.md#createsecurityconfig) - Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 
* [CreateSecurityPolicy](docs/sdk/README.md#createsecuritypolicy) - Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [CreateVpcEndpoint](docs/sdk/README.md#createvpcendpoint) - Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [DeleteAccessPolicy](docs/sdk/README.md#deleteaccesspolicy) - Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [DeleteCollection](docs/sdk/README.md#deletecollection) - Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [DeleteSecurityConfig](docs/sdk/README.md#deletesecurityconfig) - Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [DeleteSecurityPolicy](docs/sdk/README.md#deletesecuritypolicy) - Deletes an OpenSearch Serverless security policy.
* [DeleteVpcEndpoint](docs/sdk/README.md#deletevpcendpoint) - Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [GetAccessPolicy](docs/sdk/README.md#getaccesspolicy) - Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [GetAccountSettings](docs/sdk/README.md#getaccountsettings) - Returns account-level settings related to OpenSearch Serverless.
* [GetPoliciesStats](docs/sdk/README.md#getpoliciesstats) - Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
* [GetSecurityConfig](docs/sdk/README.md#getsecurityconfig) - Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [GetSecurityPolicy](docs/sdk/README.md#getsecuritypolicy) - Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [ListAccessPolicies](docs/sdk/README.md#listaccesspolicies) - Returns information about a list of OpenSearch Serverless access policies.
* [ListCollections](docs/sdk/README.md#listcollections) - <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>
* [ListSecurityConfigs](docs/sdk/README.md#listsecurityconfigs) - Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [ListSecurityPolicies](docs/sdk/README.md#listsecuritypolicies) - Returns information about configured OpenSearch Serverless security policies.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [ListVpcEndpoints](docs/sdk/README.md#listvpcendpoints) - Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [TagResource](docs/sdk/README.md#tagresource) - Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [UpdateAccessPolicy](docs/sdk/README.md#updateaccesspolicy) - Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [UpdateAccountSettings](docs/sdk/README.md#updateaccountsettings) - Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
* [UpdateCollection](docs/sdk/README.md#updatecollection) - Updates an OpenSearch Serverless collection.
* [UpdateSecurityConfig](docs/sdk/README.md#updatesecurityconfig) - Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [UpdateSecurityPolicy](docs/sdk/README.md#updatesecuritypolicy) - Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [UpdateVpcEndpoint](docs/sdk/README.md#updatevpcendpoint) - Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
