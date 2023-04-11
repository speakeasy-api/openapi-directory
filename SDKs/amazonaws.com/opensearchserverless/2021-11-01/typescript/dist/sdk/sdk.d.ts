import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://aoss.{region}.amazonaws.com", "https://aoss.{region}.amazonaws.com", "http://aoss.{region}.amazonaws.com.cn", "https://aoss.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <p>Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and security policies.</p> <p>OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning, configuring, and tuning your OpenSearch clusters. It enables you to easily search and analyze petabytes of data without having to worry about the underlying infrastructure and data management.</p> <p> To learn more about OpenSearch Serverless, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html">What is Amazon OpenSearch Serverless?</a> </p>
 *
 * @see {@link https://docs.aws.amazon.com/aoss/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Returns attributes for one or more collections, including the collection endpoint and the OpenSearch Dashboards endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
     */
    batchGetCollection(req: operations.BatchGetCollectionRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetCollectionResponse>;
    /**
     * Returns attributes for one or more VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
     */
    batchGetVpcEndpoint(req: operations.BatchGetVpcEndpointRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetVpcEndpointResponse>;
    /**
     * Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
     */
    createAccessPolicy(req: operations.CreateAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccessPolicyResponse>;
    /**
     * Creates a new OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
     */
    createCollection(req: operations.CreateCollectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCollectionResponse>;
    /**
     * Specifies a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
     */
    createSecurityConfig(req: operations.CreateSecurityConfigRequest, config?: AxiosRequestConfig): Promise<operations.CreateSecurityConfigResponse>;
    /**
     * Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
     */
    createSecurityPolicy(req: operations.CreateSecurityPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateSecurityPolicyResponse>;
    /**
     * Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
     */
    createVpcEndpoint(req: operations.CreateVpcEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateVpcEndpointResponse>;
    /**
     * Deletes an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
     */
    deleteAccessPolicy(req: operations.DeleteAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessPolicyResponse>;
    /**
     * Deletes an OpenSearch Serverless collection. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.
     */
    deleteCollection(req: operations.DeleteCollectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCollectionResponse>;
    /**
     * Deletes a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
     */
    deleteSecurityConfig(req: operations.DeleteSecurityConfigRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSecurityConfigResponse>;
    /**
     * Deletes an OpenSearch Serverless security policy.
     */
    deleteSecurityPolicy(req: operations.DeleteSecurityPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSecurityPolicyResponse>;
    /**
     * Deletes an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
     */
    deleteVpcEndpoint(req: operations.DeleteVpcEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVpcEndpointResponse>;
    /**
     * Returns an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
     */
    getAccessPolicy(req: operations.GetAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetAccessPolicyResponse>;
    /**
     * Returns account-level settings related to OpenSearch Serverless.
     */
    getAccountSettings(req: operations.GetAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountSettingsResponse>;
    /**
     * Returns statistical information about your OpenSearch Serverless access policies, security configurations, and security policies.
     */
    getPoliciesStats(req: operations.GetPoliciesStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPoliciesStatsResponse>;
    /**
     * Returns information about an OpenSearch Serverless security configuration. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
     */
    getSecurityConfig(req: operations.GetSecurityConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetSecurityConfigResponse>;
    /**
     * Returns information about a configured OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
     */
    getSecurityPolicy(req: operations.GetSecurityPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetSecurityPolicyResponse>;
    /**
     * Returns information about a list of OpenSearch Serverless access policies.
     */
    listAccessPolicies(req: operations.ListAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListAccessPoliciesResponse>;
    /**
     * <p>Lists all OpenSearch Serverless collections. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-manage.html">Creating and managing Amazon OpenSearch Serverless collections</a>.</p> <note> <p>Make sure to include an empty request body {} if you don't include any collection filters in the request.</p> </note>
     */
    listCollections(req: operations.ListCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListCollectionsResponse>;
    /**
     * Returns information about configured OpenSearch Serverless security configurations. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
     */
    listSecurityConfigs(req: operations.ListSecurityConfigsRequest, config?: AxiosRequestConfig): Promise<operations.ListSecurityConfigsResponse>;
    /**
     * Returns information about configured OpenSearch Serverless security policies.
     */
    listSecurityPolicies(req: operations.ListSecurityPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListSecurityPoliciesResponse>;
    /**
     * Returns the tags for an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Returns the OpenSearch Serverless-managed interface VPC endpoints associated with the current account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
     */
    listVpcEndpoints(req: operations.ListVpcEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListVpcEndpointsResponse>;
    /**
     * Associates tags with an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a tag or set of tags from an OpenSearch Serverless resource. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-collection.html">Tagging Amazon OpenSearch Serverless collections</a>.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an OpenSearch Serverless access policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html">Data access control for Amazon OpenSearch Serverless</a>.
     */
    updateAccessPolicy(req: operations.UpdateAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccessPolicyResponse>;
    /**
     * Update the OpenSearch Serverless settings for the current Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-scaling.html">Managing capacity limits for Amazon OpenSearch Serverless</a>.
     */
    updateAccountSettings(req: operations.UpdateAccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountSettingsResponse>;
    /**
     * Updates an OpenSearch Serverless collection.
     */
    updateCollection(req: operations.UpdateCollectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCollectionResponse>;
    /**
     * Updates a security configuration for OpenSearch Serverless. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html">SAML authentication for Amazon OpenSearch Serverless</a>.
     */
    updateSecurityConfig(req: operations.UpdateSecurityConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSecurityConfigResponse>;
    /**
     * Updates an OpenSearch Serverless security policy. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html">Network access for Amazon OpenSearch Serverless</a> and <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html">Encryption at rest for Amazon OpenSearch Serverless</a>.
     */
    updateSecurityPolicy(req: operations.UpdateSecurityPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSecurityPolicyResponse>;
    /**
     * Updates an OpenSearch Serverless-managed interface endpoint. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html">Access Amazon OpenSearch Serverless using an interface endpoint</a>.
     */
    updateVpcEndpoint(req: operations.UpdateVpcEndpointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVpcEndpointResponse>;
}
