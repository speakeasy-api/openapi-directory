# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetCollectionRequest;
import org.openapis.openapi.models.operations.BatchGetCollectionResponse;
import org.openapis.openapi.models.operations.BatchGetCollectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetCollectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetCollectionRequest req = new BatchGetCollectionRequest(                new BatchGetCollectionRequest() {{
                                ids = new String[]{{
                                    add("distinctio"),
                                    add("quibusdam"),
                                    add("unde"),
                                }};
                                names = new String[]{{
                                    add("corrupti"),
                                    add("illum"),
                                    add("vel"),
                                    add("error"),
                                }};
                            }};, BatchGetCollectionXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_BATCH_GET_COLLECTION) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
            }};            

            BatchGetCollectionResponse res = sdk.batchGetCollection(req);

            if (res.batchGetCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchGetCollection](docs/sdk/README.md#batchgetcollection) - Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [batchGetVpcEndpoint](docs/sdk/README.md#batchgetvpcendpoint) - Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [createAccessPolicy](docs/sdk/README.md#createaccesspolicy) - Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [createCollection](docs/sdk/README.md#createcollection) - Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [createSecurityConfig](docs/sdk/README.md#createsecurityconfig) - Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 
* [createSecurityPolicy](docs/sdk/README.md#createsecuritypolicy) - Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [createVpcEndpoint](docs/sdk/README.md#createvpcendpoint) - Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [deleteAccessPolicy](docs/sdk/README.md#deleteaccesspolicy) - Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [deleteCollection](docs/sdk/README.md#deletecollection) - Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [deleteSecurityConfig](docs/sdk/README.md#deletesecurityconfig) - Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [deleteSecurityPolicy](docs/sdk/README.md#deletesecuritypolicy) - Deletes an OpenSearch Serverless security policy.
* [deleteVpcEndpoint](docs/sdk/README.md#deletevpcendpoint) - Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [getAccessPolicy](docs/sdk/README.md#getaccesspolicy) - Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [getAccountSettings](docs/sdk/README.md#getaccountsettings) - Returns account-level settings related to OpenSearch Serverless.
* [getPoliciesStats](docs/sdk/README.md#getpoliciesstats) - Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
* [getSecurityConfig](docs/sdk/README.md#getsecurityconfig) - Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [getSecurityPolicy](docs/sdk/README.md#getsecuritypolicy) - Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [listAccessPolicies](docs/sdk/README.md#listaccesspolicies) - Returns information about a list of OpenSearch Serverless access policies.
* [listCollections](docs/sdk/README.md#listcollections) - <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>
* [listSecurityConfigs](docs/sdk/README.md#listsecurityconfigs) - Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [listSecurityPolicies](docs/sdk/README.md#listsecuritypolicies) - Returns information about configured OpenSearch Serverless security policies.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [listVpcEndpoints](docs/sdk/README.md#listvpcendpoints) - Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [tagResource](docs/sdk/README.md#tagresource) - Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [untagResource](docs/sdk/README.md#untagresource) - Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [updateAccessPolicy](docs/sdk/README.md#updateaccesspolicy) - Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [updateAccountSettings](docs/sdk/README.md#updateaccountsettings) - Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
* [updateCollection](docs/sdk/README.md#updatecollection) - Updates an OpenSearch Serverless collection.
* [updateSecurityConfig](docs/sdk/README.md#updatesecurityconfig) - Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [updateSecurityPolicy](docs/sdk/README.md#updatesecuritypolicy) - Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [updateVpcEndpoint](docs/sdk/README.md#updatevpcendpoint) - Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
