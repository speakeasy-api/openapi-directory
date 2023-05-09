# SDK

## Overview

<p>Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies.</p> <p>OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.</p> <p> To learn more about OpenSearch Serverless, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html">What is Amazon OpenSearch Serverless?</a> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/aoss/>
### Available Operations

* [batchGetCollection](#batchgetcollection) - Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [batchGetVpcEndpoint](#batchgetvpcendpoint) - Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [createAccessPolicy](#createaccesspolicy) - Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [createCollection](#createcollection) - Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [createSecurityConfig](#createsecurityconfig) - Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 
* [createSecurityPolicy](#createsecuritypolicy) - Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [createVpcEndpoint](#createvpcendpoint) - Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [deleteAccessPolicy](#deleteaccesspolicy) - Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [deleteCollection](#deletecollection) - Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
* [deleteSecurityConfig](#deletesecurityconfig) - Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [deleteSecurityPolicy](#deletesecuritypolicy) - Deletes an OpenSearch Serverless security policy.
* [deleteVpcEndpoint](#deletevpcendpoint) - Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [getAccessPolicy](#getaccesspolicy) - Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [getAccountSettings](#getaccountsettings) - Returns account-level settings related to OpenSearch Serverless.
* [getPoliciesStats](#getpoliciesstats) - Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
* [getSecurityConfig](#getsecurityconfig) - Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [getSecurityPolicy](#getsecuritypolicy) - Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [listAccessPolicies](#listaccesspolicies) - Returns information about a list of OpenSearch Serverless access policies.
* [listCollections](#listcollections) - <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>
* [listSecurityConfigs](#listsecurityconfigs) - Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [listSecurityPolicies](#listsecuritypolicies) - Returns information about configured OpenSearch Serverless security policies.
* [listTagsForResource](#listtagsforresource) - Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [listVpcEndpoints](#listvpcendpoints) - Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
* [tagResource](#tagresource) - Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [untagResource](#untagresource) - Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
* [updateAccessPolicy](#updateaccesspolicy) - Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
* [updateAccountSettings](#updateaccountsettings) - Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
* [updateCollection](#updatecollection) - Updates an OpenSearch Serverless collection.
* [updateSecurityConfig](#updatesecurityconfig) - Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
* [updateSecurityPolicy](#updatesecuritypolicy) - Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
* [updateVpcEndpoint](#updatevpcendpoint) - Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

## batchGetCollection

Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

### Example Usage

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
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetCollectionRequest req = new BatchGetCollectionRequest(                new BatchGetCollectionRequest() {{
                                ids = new String[]{{
                                    add("molestiae"),
                                    add("minus"),
                                }};
                                names = new String[]{{
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                            }};, BatchGetCollectionXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_BATCH_GET_COLLECTION) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            BatchGetCollectionResponse res = sdk.sdk.batchGetCollection(req);

            if (res.batchGetCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetVpcEndpoint

Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetVpcEndpointRequest;
import org.openapis.openapi.models.operations.BatchGetVpcEndpointResponse;
import org.openapis.openapi.models.operations.BatchGetVpcEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetVpcEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetVpcEndpointRequest req = new BatchGetVpcEndpointRequest(                new BatchGetVpcEndpointRequest(                new String[]{{
                                                add("sapiente"),
                                                add("quo"),
                                                add("odit"),
                                                add("at"),
                                            }});, BatchGetVpcEndpointXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_BATCH_GET_VPC_ENDPOINT) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            BatchGetVpcEndpointResponse res = sdk.sdk.batchGetVpcEndpoint(req);

            if (res.batchGetVpcEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccessPolicy

Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessPolicyRequest;
import org.openapis.openapi.models.operations.CreateAccessPolicyResponse;
import org.openapis.openapi.models.operations.CreateAccessPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessPolicyTypeEnum;
import org.openapis.openapi.models.shared.CreateAccessPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessPolicyRequest req = new CreateAccessPolicyRequest(                new CreateAccessPolicyRequest("dolorum", "dicta", AccessPolicyTypeEnum.DATA) {{
                                clientToken = "nam";
                                description = "officia";
                            }};, CreateAccessPolicyXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_CREATE_ACCESS_POLICY) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            CreateAccessPolicyResponse res = sdk.sdk.createAccessPolicy(req);

            if (res.createAccessPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCollection

Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCollectionRequest;
import org.openapis.openapi.models.operations.CreateCollectionResponse;
import org.openapis.openapi.models.operations.CreateCollectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CollectionTypeEnum;
import org.openapis.openapi.models.shared.CreateCollectionRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCollectionRequest req = new CreateCollectionRequest(                new CreateCollectionRequest("molestiae") {{
                                clientToken = "modi";
                                description = "qui";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("ipsum", "excepturi") {{
                                        key = "cum";
                                        value = "esse";
                                    }}),
                                    add(new Tag("ad", "natus") {{
                                        key = "aspernatur";
                                        value = "perferendis";
                                    }}),
                                    add(new Tag("dolor", "natus") {{
                                        key = "sed";
                                        value = "iste";
                                    }}),
                                    add(new Tag("saepe", "fuga") {{
                                        key = "laboriosam";
                                        value = "hic";
                                    }}),
                                }};
                                type = CollectionTypeEnum.SEARCH;
                            }};, CreateCollectionXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_CREATE_COLLECTION) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "iste";
                xAmzCredential = "iure";
                xAmzDate = "saepe";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreateCollectionResponse res = sdk.sdk.createCollection(req);

            if (res.createCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSecurityConfig

Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSecurityConfigRequest;
import org.openapis.openapi.models.operations.CreateSecurityConfigResponse;
import org.openapis.openapi.models.operations.CreateSecurityConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSecurityConfigRequest;
import org.openapis.openapi.models.shared.SamlConfigOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityConfigTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSecurityConfigRequest req = new CreateSecurityConfigRequest(                new CreateSecurityConfigRequest("est", SecurityConfigTypeEnum.SAML) {{
                                clientToken = "mollitia";
                                description = "laborum";
                                samlOptions = new SamlConfigOptions("dolores") {{
                                    groupAttribute = "dolorem";
                                    sessionTimeout = 358152L;
                                    userAttribute = "explicabo";
                                }};;
                            }};, CreateSecurityConfigXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_CREATE_SECURITY_CONFIG) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "enim";
                xAmzCredential = "omnis";
                xAmzDate = "nemo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "accusantium";
            }};            

            CreateSecurityConfigResponse res = sdk.sdk.createSecurityConfig(req);

            if (res.createSecurityConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSecurityPolicy

Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSecurityPolicyRequest;
import org.openapis.openapi.models.operations.CreateSecurityPolicyResponse;
import org.openapis.openapi.models.operations.CreateSecurityPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateSecurityPolicyRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSecurityPolicyRequest req = new CreateSecurityPolicyRequest(                new CreateSecurityPolicyRequest("culpa", "doloribus", SecurityPolicyTypeEnum.NETWORK) {{
                                clientToken = "architecto";
                                description = "mollitia";
                            }};, CreateSecurityPolicyXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_CREATE_SECURITY_POLICY) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "consequuntur";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "numquam";
            }};            

            CreateSecurityPolicyResponse res = sdk.sdk.createSecurityPolicy(req);

            if (res.createSecurityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createVpcEndpoint

Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateVpcEndpointRequest;
import org.openapis.openapi.models.operations.CreateVpcEndpointResponse;
import org.openapis.openapi.models.operations.CreateVpcEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateVpcEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateVpcEndpointRequest req = new CreateVpcEndpointRequest(                new CreateVpcEndpointRequest("quam",                 new String[]{{
                                                add("velit"),
                                                add("error"),
                                            }}, "quia") {{
                                clientToken = "quis";
                                securityGroupIds = new String[]{{
                                    add("laborum"),
                                }};
                            }};, CreateVpcEndpointXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_CREATE_VPC_ENDPOINT) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            CreateVpcEndpointResponse res = sdk.sdk.createVpcEndpoint(req);

            if (res.createVpcEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccessPolicy

Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessPolicyRequest;
import org.openapis.openapi.models.operations.DeleteAccessPolicyResponse;
import org.openapis.openapi.models.operations.DeleteAccessPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessPolicyTypeEnum;
import org.openapis.openapi.models.shared.DeleteAccessPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessPolicyRequest req = new DeleteAccessPolicyRequest(                new DeleteAccessPolicyRequest("possimus", AccessPolicyTypeEnum.DATA) {{
                                clientToken = "aut";
                            }};, DeleteAccessPolicyXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_DELETE_ACCESS_POLICY) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "error";
                xAmzCredential = "temporibus";
                xAmzDate = "laborum";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            DeleteAccessPolicyResponse res = sdk.sdk.deleteAccessPolicy(req);

            if (res.deleteAccessPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCollection

Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCollectionRequest;
import org.openapis.openapi.models.operations.DeleteCollectionResponse;
import org.openapis.openapi.models.operations.DeleteCollectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCollectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCollectionRequest req = new DeleteCollectionRequest(                new DeleteCollectionRequest("nihil") {{
                                clientToken = "praesentium";
                            }};, DeleteCollectionXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_DELETE_COLLECTION) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            DeleteCollectionResponse res = sdk.sdk.deleteCollection(req);

            if (res.deleteCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSecurityConfig

Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSecurityConfigRequest;
import org.openapis.openapi.models.operations.DeleteSecurityConfigResponse;
import org.openapis.openapi.models.operations.DeleteSecurityConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSecurityConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSecurityConfigRequest req = new DeleteSecurityConfigRequest(                new DeleteSecurityConfigRequest("ut") {{
                                clientToken = "maiores";
                            }};, DeleteSecurityConfigXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_DELETE_SECURITY_CONFIG) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            DeleteSecurityConfigResponse res = sdk.sdk.deleteSecurityConfig(req);

            if (res.deleteSecurityConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSecurityPolicy

Deletes an OpenSearch Serverless security policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSecurityPolicyRequest;
import org.openapis.openapi.models.operations.DeleteSecurityPolicyResponse;
import org.openapis.openapi.models.operations.DeleteSecurityPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSecurityPolicyRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSecurityPolicyRequest req = new DeleteSecurityPolicyRequest(                new DeleteSecurityPolicyRequest("commodi", SecurityPolicyTypeEnum.NETWORK) {{
                                clientToken = "quae";
                            }};, DeleteSecurityPolicyXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_DELETE_SECURITY_POLICY) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            DeleteSecurityPolicyResponse res = sdk.sdk.deleteSecurityPolicy(req);

            if (res.deleteSecurityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVpcEndpoint

Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVpcEndpointRequest;
import org.openapis.openapi.models.operations.DeleteVpcEndpointResponse;
import org.openapis.openapi.models.operations.DeleteVpcEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVpcEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVpcEndpointRequest req = new DeleteVpcEndpointRequest(                new DeleteVpcEndpointRequest("voluptates") {{
                                clientToken = "quasi";
                            }};, DeleteVpcEndpointXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_DELETE_VPC_ENDPOINT) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "sint";
                xAmzCredential = "veritatis";
                xAmzDate = "itaque";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "consequatur";
            }};            

            DeleteVpcEndpointResponse res = sdk.sdk.deleteVpcEndpoint(req);

            if (res.deleteVpcEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccessPolicy

Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccessPolicyRequest;
import org.openapis.openapi.models.operations.GetAccessPolicyResponse;
import org.openapis.openapi.models.operations.GetAccessPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessPolicyTypeEnum;
import org.openapis.openapi.models.shared.GetAccessPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccessPolicyRequest req = new GetAccessPolicyRequest(                new GetAccessPolicyRequest("quibusdam", AccessPolicyTypeEnum.DATA);, GetAccessPolicyXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_GET_ACCESS_POLICY) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "distinctio";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "labore";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            GetAccessPolicyResponse res = sdk.sdk.getAccessPolicy(req);

            if (res.getAccessPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountSettings

Returns account-level settings related to OpenSearch Serverless.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountSettingsRequest;
import org.openapis.openapi.models.operations.GetAccountSettingsResponse;
import org.openapis.openapi.models.operations.GetAccountSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountSettingsRequest req = new GetAccountSettingsRequest(                new java.util.HashMap<String, Object>() {{
                                put("quos", "perferendis");
                                put("magni", "assumenda");
                                put("ipsam", "alias");
                            }}, GetAccountSettingsXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_GET_ACCOUNT_SETTINGS) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "excepturi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "labore";
            }};            

            GetAccountSettingsResponse res = sdk.sdk.getAccountSettings(req);

            if (res.getAccountSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPoliciesStats

Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPoliciesStatsRequest;
import org.openapis.openapi.models.operations.GetPoliciesStatsResponse;
import org.openapis.openapi.models.operations.GetPoliciesStatsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPoliciesStatsRequest req = new GetPoliciesStatsRequest(                new java.util.HashMap<String, Object>() {{
                                put("non", "eligendi");
                                put("sint", "aliquid");
                            }}, GetPoliciesStatsXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_GET_POLICIES_STATS) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
            }};            

            GetPoliciesStatsResponse res = sdk.sdk.getPoliciesStats(req);

            if (res.getPoliciesStatsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSecurityConfig

Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSecurityConfigRequest;
import org.openapis.openapi.models.operations.GetSecurityConfigResponse;
import org.openapis.openapi.models.operations.GetSecurityConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSecurityConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSecurityConfigRequest req = new GetSecurityConfigRequest(                new GetSecurityConfigRequest("in");, GetSecurityConfigXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_GET_SECURITY_CONFIG) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
            }};            

            GetSecurityConfigResponse res = sdk.sdk.getSecurityConfig(req);

            if (res.getSecurityConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSecurityPolicy

Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSecurityPolicyRequest;
import org.openapis.openapi.models.operations.GetSecurityPolicyResponse;
import org.openapis.openapi.models.operations.GetSecurityPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetSecurityPolicyRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSecurityPolicyRequest req = new GetSecurityPolicyRequest(                new GetSecurityPolicyRequest("ea", SecurityPolicyTypeEnum.ENCRYPTION);, GetSecurityPolicyXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_GET_SECURITY_POLICY) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "non";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "enim";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "delectus";
            }};            

            GetSecurityPolicyResponse res = sdk.sdk.getSecurityPolicy(req);

            if (res.getSecurityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccessPolicies

Returns information about a list of OpenSearch Serverless access policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccessPoliciesRequest;
import org.openapis.openapi.models.operations.ListAccessPoliciesResponse;
import org.openapis.openapi.models.operations.ListAccessPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessPolicyTypeEnum;
import org.openapis.openapi.models.shared.ListAccessPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccessPoliciesRequest req = new ListAccessPoliciesRequest(                new ListAccessPoliciesRequest(AccessPolicyTypeEnum.DATA) {{
                                maxResults = 588465L;
                                nextToken = "nam";
                                resource = new String[]{{
                                    add("blanditiis"),
                                    add("deleniti"),
                                    add("sapiente"),
                                }};
                            }};, ListAccessPoliciesXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_LIST_ACCESS_POLICIES) {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "nisi";
                xAmzDate = "vel";
                xAmzSecurityToken = "natus";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "molestiae";
                maxResults = "perferendis";
                nextToken = "nihil";
            }};            

            ListAccessPoliciesResponse res = sdk.sdk.listAccessPolicies(req);

            if (res.listAccessPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCollections

<p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCollectionsRequest;
import org.openapis.openapi.models.operations.ListCollectionsResponse;
import org.openapis.openapi.models.operations.ListCollectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CollectionFilters;
import org.openapis.openapi.models.shared.CollectionStatusEnum;
import org.openapis.openapi.models.shared.ListCollectionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCollectionsRequest req = new ListCollectionsRequest(                new ListCollectionsRequest() {{
                                collectionFilters = new CollectionFilters() {{
                                    name = "Alfonso Green";
                                    status = CollectionStatusEnum.ACTIVE;
                                }};;
                                maxResults = 749170L;
                                nextToken = "eum";
                            }};, ListCollectionsXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_LIST_COLLECTIONS) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "architecto";
                xAmzDate = "magnam";
                xAmzSecurityToken = "et";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "ullam";
                maxResults = "provident";
                nextToken = "quos";
            }};            

            ListCollectionsResponse res = sdk.sdk.listCollections(req);

            if (res.listCollectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSecurityConfigs

Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSecurityConfigsRequest;
import org.openapis.openapi.models.operations.ListSecurityConfigsResponse;
import org.openapis.openapi.models.operations.ListSecurityConfigsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSecurityConfigsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityConfigTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSecurityConfigsRequest req = new ListSecurityConfigsRequest(                new ListSecurityConfigsRequest(SecurityConfigTypeEnum.SAML) {{
                                maxResults = 33625L;
                                nextToken = "mollitia";
                            }};, ListSecurityConfigsXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_LIST_SECURITY_CONFIGS) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "ad";
                xAmzDate = "eum";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "odit";
                maxResults = "nemo";
                nextToken = "quasi";
            }};            

            ListSecurityConfigsResponse res = sdk.sdk.listSecurityConfigs(req);

            if (res.listSecurityConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSecurityPolicies

Returns information about configured OpenSearch Serverless security policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSecurityPoliciesRequest;
import org.openapis.openapi.models.operations.ListSecurityPoliciesResponse;
import org.openapis.openapi.models.operations.ListSecurityPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSecurityPoliciesRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSecurityPoliciesRequest req = new ListSecurityPoliciesRequest(                new ListSecurityPoliciesRequest(SecurityPolicyTypeEnum.NETWORK) {{
                                maxResults = 891924L;
                                nextToken = "eius";
                                resource = new String[]{{
                                    add("deleniti"),
                                    add("facilis"),
                                    add("in"),
                                    add("architecto"),
                                }};
                            }};, ListSecurityPoliciesXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_LIST_SECURITY_POLICIES) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "ullam";
                xAmzDate = "expedita";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "quibusdam";
                maxResults = "sed";
                nextToken = "saepe";
            }};            

            ListSecurityPoliciesResponse res = sdk.sdk.listSecurityPolicies(req);

            if (res.listSecurityPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("accusantium");, ListTagsForResourceXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVpcEndpoints

Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVpcEndpointsRequest;
import org.openapis.openapi.models.operations.ListVpcEndpointsResponse;
import org.openapis.openapi.models.operations.ListVpcEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListVpcEndpointsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VpcEndpointFilters;
import org.openapis.openapi.models.shared.VpcEndpointStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVpcEndpointsRequest req = new ListVpcEndpointsRequest(                new ListVpcEndpointsRequest() {{
                                maxResults = 807319L;
                                nextToken = "ea";
                                vpcEndpointFilters = new VpcEndpointFilters() {{
                                    status = VpcEndpointStatusEnum.ACTIVE;
                                }};;
                            }};, ListVpcEndpointsXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_LIST_VPC_ENDPOINTS) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
                maxResults = "voluptate";
                nextToken = "autem";
            }};            

            ListVpcEndpointsResponse res = sdk.sdk.listVpcEndpoints(req);

            if (res.listVpcEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("eaque",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("perferendis", "fugiat") {{
                                                    key = "nemo";
                                                    value = "voluptatibus";
                                                }}),
                                                add(new Tag("cumque", "corporis") {{
                                                    key = "amet";
                                                    value = "aut";
                                                }}),
                                                add(new Tag("nobis", "dolores") {{
                                                    key = "hic";
                                                    value = "libero";
                                                }}),
                                                add(new Tag("dignissimos", "eaque") {{
                                                    key = "quis";
                                                    value = "totam";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_TAG_RESOURCE) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "nesciunt";
                xAmzCredential = "eos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "quam";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("vero",                 new String[]{{
                                                add("hic"),
                                                add("recusandae"),
                                            }});, UntagResourceXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "perspiciatis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "porro";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "blanditiis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccessPolicy

Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccessPolicyRequest;
import org.openapis.openapi.models.operations.UpdateAccessPolicyResponse;
import org.openapis.openapi.models.operations.UpdateAccessPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AccessPolicyTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAccessPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccessPolicyRequest req = new UpdateAccessPolicyRequest(                new UpdateAccessPolicyRequest("eaque", "occaecati", AccessPolicyTypeEnum.DATA) {{
                                clientToken = "rerum";
                                description = "adipisci";
                                policy = "asperiores";
                            }};, UpdateAccessPolicyXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_UPDATE_ACCESS_POLICY) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
            }};            

            UpdateAccessPolicyResponse res = sdk.sdk.updateAccessPolicy(req);

            if (res.updateAccessPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountSettings

Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountSettingsRequest;
import org.openapis.openapi.models.operations.UpdateAccountSettingsResponse;
import org.openapis.openapi.models.operations.UpdateAccountSettingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.CapacityLimits;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAccountSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccountSettingsRequest req = new UpdateAccountSettingsRequest(                new UpdateAccountSettingsRequest() {{
                                capacityLimits = new CapacityLimits() {{
                                    maxIndexingCapacityInOCU = 730122L;
                                    maxSearchCapacityInOCU = 964490L;
                                }};;
                            }};, UpdateAccountSettingsXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_UPDATE_ACCOUNT_SETTINGS) {{
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            UpdateAccountSettingsResponse res = sdk.sdk.updateAccountSettings(req);

            if (res.updateAccountSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCollection

Updates an OpenSearch Serverless collection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCollectionRequest;
import org.openapis.openapi.models.operations.UpdateCollectionResponse;
import org.openapis.openapi.models.operations.UpdateCollectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCollectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCollectionRequest req = new UpdateCollectionRequest(                new UpdateCollectionRequest("hic") {{
                                clientToken = "excepturi";
                                description = "cum";
                            }};, UpdateCollectionXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_UPDATE_COLLECTION) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "reiciendis";
                xAmzDate = "amet";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "veritatis";
            }};            

            UpdateCollectionResponse res = sdk.sdk.updateCollection(req);

            if (res.updateCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSecurityConfig

Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSecurityConfigRequest;
import org.openapis.openapi.models.operations.UpdateSecurityConfigResponse;
import org.openapis.openapi.models.operations.UpdateSecurityConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.SamlConfigOptions;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSecurityConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSecurityConfigRequest req = new UpdateSecurityConfigRequest(                new UpdateSecurityConfigRequest("ipsa", "iure") {{
                                clientToken = "odio";
                                description = "quaerat";
                                samlOptions = new SamlConfigOptions("accusamus") {{
                                    groupAttribute = "quidem";
                                    sessionTimeout = 976405L;
                                    userAttribute = "voluptas";
                                }};;
                            }};, UpdateSecurityConfigXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_UPDATE_SECURITY_CONFIG) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "eos";
                xAmzCredential = "atque";
                xAmzDate = "sit";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "soluta";
            }};            

            UpdateSecurityConfigResponse res = sdk.sdk.updateSecurityConfig(req);

            if (res.updateSecurityConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSecurityPolicy

Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSecurityPolicyRequest;
import org.openapis.openapi.models.operations.UpdateSecurityPolicyResponse;
import org.openapis.openapi.models.operations.UpdateSecurityPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SecurityPolicyTypeEnum;
import org.openapis.openapi.models.shared.UpdateSecurityPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSecurityPolicyRequest req = new UpdateSecurityPolicyRequest(                new UpdateSecurityPolicyRequest("iusto", "voluptate", SecurityPolicyTypeEnum.NETWORK) {{
                                clientToken = "deleniti";
                                description = "omnis";
                                policy = "necessitatibus";
                            }};, UpdateSecurityPolicyXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_UPDATE_SECURITY_POLICY) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "nihil";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "id";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateSecurityPolicyResponse res = sdk.sdk.updateSecurityPolicy(req);

            if (res.updateSecurityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVpcEndpoint

Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVpcEndpointRequest;
import org.openapis.openapi.models.operations.UpdateVpcEndpointResponse;
import org.openapis.openapi.models.operations.UpdateVpcEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateVpcEndpointRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVpcEndpointRequest req = new UpdateVpcEndpointRequest(                new UpdateVpcEndpointRequest("aspernatur") {{
                                addSecurityGroupIds = new String[]{{
                                    add("amet"),
                                }};
                                addSubnetIds = new String[]{{
                                    add("accusamus"),
                                    add("ad"),
                                    add("saepe"),
                                    add("suscipit"),
                                }};
                                clientToken = "deserunt";
                                removeSecurityGroupIds = new String[]{{
                                    add("minima"),
                                    add("repellendus"),
                                    add("totam"),
                                }};
                                removeSubnetIds = new String[]{{
                                    add("alias"),
                                    add("at"),
                                    add("quaerat"),
                                }};
                            }};, UpdateVpcEndpointXAmzTargetEnum.OPEN_SEARCH_SERVERLESS_UPDATE_VPC_ENDPOINT) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quod";
                xAmzDate = "officiis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "a";
            }};            

            UpdateVpcEndpointResponse res = sdk.sdk.updateVpcEndpoint(req);

            if (res.updateVpcEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
