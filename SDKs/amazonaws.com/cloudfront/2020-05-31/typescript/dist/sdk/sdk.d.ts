import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://cloudfront.amazonaws.com", "http://cloudfront.{region}.amazonaws.com.cn", "https://cloudfront.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/cloudfront/} - Amazon Web Services documentation
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
     * <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that's already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    associateAlias20200531(req: operations.AssociateAlias20200531Request, config?: AxiosRequestConfig): Promise<operations.AssociateAlias20200531Response>;
    /**
     * <p>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.</p> <p>After you create a staging distribution, you can use <code>UpdateDistribution</code> to modify the staging distribution's configuration. Then you can use <code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the staging distribution.</p>
     */
    copyDistribution20200531(req: operations.CopyDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.CopyDistribution20200531Response>;
    /**
     * <p>Creates a cache policy.</p> <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the <i>cache key</i>. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    createCachePolicy20200531(req: operations.CreateCachePolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateCachePolicy20200531Response>;
    /**
     * Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
     */
    createCloudFrontOriginAccessIdentity20200531(req: operations.CreateCloudFrontOriginAccessIdentity20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateCloudFrontOriginAccessIdentity20200531Response>;
    /**
     * <p>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.</p> <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to create a staging distribution, then use <code>UpdateDistribution</code> to modify the staging distribution's configuration.</p> <p>After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</p>
     */
    createContinuousDeploymentPolicy20200531(req: operations.CreateContinuousDeploymentPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateContinuousDeploymentPolicy20200531Response>;
    /**
     * Creates a CloudFront distribution.
     */
    createDistribution20200531(req: operations.CreateDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateDistribution20200531Response>;
    /**
     * Create a new distribution with tags.
     */
    createDistributionWithTags20200531(req: operations.CreateDistributionWithTags20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateDistributionWithTags20200531Response>;
    /**
     * Create a new field-level encryption configuration.
     */
    createFieldLevelEncryptionConfig20200531(req: operations.CreateFieldLevelEncryptionConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateFieldLevelEncryptionConfig20200531Response>;
    /**
     * Create a field-level encryption profile.
     */
    createFieldLevelEncryptionProfile20200531(req: operations.CreateFieldLevelEncryptionProfile20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateFieldLevelEncryptionProfile20200531Response>;
    /**
     * <p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>
     */
    createFunction20200531(req: operations.CreateFunction20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateFunction20200531Response>;
    /**
     * Create a new invalidation.
     */
    createInvalidation20200531(req: operations.CreateInvalidation20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateInvalidation20200531Response>;
    /**
     * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    createKeyGroup20200531(req: operations.CreateKeyGroup20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateKeyGroup20200531Response>;
    /**
     * <p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    createMonitoringSubscription20200531(req: operations.CreateMonitoringSubscription20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateMonitoringSubscription20200531Response>;
    /**
     * <p>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</p> <p>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.</p> <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    createOriginAccessControl20200531(req: operations.CreateOriginAccessControl20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateOriginAccessControl20200531Response>;
    /**
     * <p>Creates an origin request policy.</p> <p>After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    createOriginRequestPolicy20200531(req: operations.CreateOriginRequestPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateOriginRequestPolicy20200531Response>;
    /**
     * Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
     */
    createPublicKey20200531(req: operations.CreatePublicKey20200531Request, config?: AxiosRequestConfig): Promise<operations.CreatePublicKey20200531Response>;
    /**
     * <p>Creates a real-time log configuration.</p> <p>After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p> <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    createRealtimeLogConfig20200531(req: operations.CreateRealtimeLogConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateRealtimeLogConfig20200531Response>;
    /**
     * <p>Creates a response headers policy.</p> <p>A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    createResponseHeadersPolicy20200531(req: operations.CreateResponseHeadersPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateResponseHeadersPolicy20200531Response>;
    /**
     * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
     */
    createStreamingDistribution20200531(req: operations.CreateStreamingDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistribution20200531Response>;
    /**
     * This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
     */
    createStreamingDistributionWithTags20200531(req: operations.CreateStreamingDistributionWithTags20200531Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistributionWithTags20200531Response>;
    /**
     * <p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>
     */
    deleteCachePolicy20200531(req: operations.DeleteCachePolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteCachePolicy20200531Response>;
    /**
     * Delete an origin access identity.
     */
    deleteCloudFrontOriginAccessIdentity20200531(req: operations.DeleteCloudFrontOriginAccessIdentity20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteCloudFrontOriginAccessIdentity20200531Response>;
    /**
     * <p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>
     */
    deleteContinuousDeploymentPolicy20200531(req: operations.DeleteContinuousDeploymentPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteContinuousDeploymentPolicy20200531Response>;
    /**
     * Delete a distribution.
     */
    deleteDistribution20200531(req: operations.DeleteDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteDistribution20200531Response>;
    /**
     * Remove a field-level encryption configuration.
     */
    deleteFieldLevelEncryptionConfig20200531(req: operations.DeleteFieldLevelEncryptionConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteFieldLevelEncryptionConfig20200531Response>;
    /**
     * Remove a field-level encryption profile.
     */
    deleteFieldLevelEncryptionProfile20200531(req: operations.DeleteFieldLevelEncryptionProfile20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteFieldLevelEncryptionProfile20200531Response>;
    /**
     * <p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
     */
    deleteFunction20200531(req: operations.DeleteFunction20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteFunction20200531Response>;
    /**
     * <p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>
     */
    deleteKeyGroup20200531(req: operations.DeleteKeyGroup20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteKeyGroup20200531Response>;
    /**
     * Disables additional CloudWatch metrics for the specified CloudFront distribution.
     */
    deleteMonitoringSubscription20200531(req: operations.DeleteMonitoringSubscription20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteMonitoringSubscription20200531Response>;
    /**
     * <p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>
     */
    deleteOriginAccessControl20200531(req: operations.DeleteOriginAccessControl20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteOriginAccessControl20200531Response>;
    /**
     * <p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>
     */
    deleteOriginRequestPolicy20200531(req: operations.DeleteOriginRequestPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteOriginRequestPolicy20200531Response>;
    /**
     * Remove a public key you previously added to CloudFront.
     */
    deletePublicKey20200531(req: operations.DeletePublicKey20200531Request, config?: AxiosRequestConfig): Promise<operations.DeletePublicKey20200531Response>;
    /**
     * <p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>
     */
    deleteRealtimeLogConfig20200531(req: operations.DeleteRealtimeLogConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteRealtimeLogConfig20200531Response>;
    /**
     * <p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>
     */
    deleteResponseHeadersPolicy20200531(req: operations.DeleteResponseHeadersPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteResponseHeadersPolicy20200531Response>;
    /**
     * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    deleteStreamingDistribution20200531(req: operations.DeleteStreamingDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingDistribution20200531Response>;
    /**
     * <p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
     */
    describeFunction20200531(req: operations.DescribeFunction20200531Request, config?: AxiosRequestConfig): Promise<operations.DescribeFunction20200531Response>;
    /**
     * <p>Gets a cache policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
     */
    getCachePolicy20200531(req: operations.GetCachePolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.GetCachePolicy20200531Response>;
    /**
     * <p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
     */
    getCachePolicyConfig20200531(req: operations.GetCachePolicyConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetCachePolicyConfig20200531Response>;
    /**
     * Get the information about an origin access identity.
     */
    getCloudFrontOriginAccessIdentity20200531(req: operations.GetCloudFrontOriginAccessIdentity20200531Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentity20200531Response>;
    /**
     * Get the configuration information about an origin access identity.
     */
    getCloudFrontOriginAccessIdentityConfig20200531(req: operations.GetCloudFrontOriginAccessIdentityConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentityConfig20200531Response>;
    /**
     * Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).
     */
    getContinuousDeploymentPolicy20200531(req: operations.GetContinuousDeploymentPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.GetContinuousDeploymentPolicy20200531Response>;
    /**
     * Gets configuration information about a continuous deployment policy.
     */
    getContinuousDeploymentPolicyConfig20200531(req: operations.GetContinuousDeploymentPolicyConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetContinuousDeploymentPolicyConfig20200531Response>;
    /**
     * Get the information about a distribution.
     */
    getDistribution20200531(req: operations.GetDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.GetDistribution20200531Response>;
    /**
     * Get the configuration information about a distribution.
     */
    getDistributionConfig20200531(req: operations.GetDistributionConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetDistributionConfig20200531Response>;
    /**
     * Get the field-level encryption configuration information.
     */
    getFieldLevelEncryption20200531(req: operations.GetFieldLevelEncryption20200531Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryption20200531Response>;
    /**
     * Get the field-level encryption configuration information.
     */
    getFieldLevelEncryptionConfig20200531(req: operations.GetFieldLevelEncryptionConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionConfig20200531Response>;
    /**
     * Get the field-level encryption profile information.
     */
    getFieldLevelEncryptionProfile20200531(req: operations.GetFieldLevelEncryptionProfile20200531Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionProfile20200531Response>;
    /**
     * Get the field-level encryption profile configuration information.
     */
    getFieldLevelEncryptionProfileConfig20200531(req: operations.GetFieldLevelEncryptionProfileConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionProfileConfig20200531Response>;
    /**
     * <p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
     */
    getFunction20200531(req: operations.GetFunction20200531Request, config?: AxiosRequestConfig): Promise<operations.GetFunction20200531Response>;
    /**
     * Get the information about an invalidation.
     */
    getInvalidation20200531(req: operations.GetInvalidation20200531Request, config?: AxiosRequestConfig): Promise<operations.GetInvalidation20200531Response>;
    /**
     * <p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
     */
    getKeyGroup20200531(req: operations.GetKeyGroup20200531Request, config?: AxiosRequestConfig): Promise<operations.GetKeyGroup20200531Response>;
    /**
     * <p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
     */
    getKeyGroupConfig20200531(req: operations.GetKeyGroupConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetKeyGroupConfig20200531Response>;
    /**
     * Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.
     */
    getMonitoringSubscription20200531(req: operations.GetMonitoringSubscription20200531Request, config?: AxiosRequestConfig): Promise<operations.GetMonitoringSubscription20200531Response>;
    /**
     * Gets a CloudFront origin access control, including its unique identifier.
     */
    getOriginAccessControl20200531(req: operations.GetOriginAccessControl20200531Request, config?: AxiosRequestConfig): Promise<operations.GetOriginAccessControl20200531Response>;
    /**
     * Gets a CloudFront origin access control configuration.
     */
    getOriginAccessControlConfig20200531(req: operations.GetOriginAccessControlConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetOriginAccessControlConfig20200531Response>;
    /**
     * <p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
     */
    getOriginRequestPolicy20200531(req: operations.GetOriginRequestPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.GetOriginRequestPolicy20200531Response>;
    /**
     * <p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
     */
    getOriginRequestPolicyConfig20200531(req: operations.GetOriginRequestPolicyConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetOriginRequestPolicyConfig20200531Response>;
    /**
     * Gets a public key.
     */
    getPublicKey20200531(req: operations.GetPublicKey20200531Request, config?: AxiosRequestConfig): Promise<operations.GetPublicKey20200531Response>;
    /**
     * Gets a public key configuration.
     */
    getPublicKeyConfig20200531(req: operations.GetPublicKeyConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetPublicKeyConfig20200531Response>;
    /**
     * <p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>
     */
    getRealtimeLogConfig20200531(req: operations.GetRealtimeLogConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetRealtimeLogConfig20200531Response>;
    /**
     * <p>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p> <p>To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
     */
    getResponseHeadersPolicy20200531(req: operations.GetResponseHeadersPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.GetResponseHeadersPolicy20200531Response>;
    /**
     * <p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
     */
    getResponseHeadersPolicyConfig20200531(req: operations.GetResponseHeadersPolicyConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetResponseHeadersPolicyConfig20200531Response>;
    /**
     * Gets information about a specified RTMP distribution, including the distribution configuration.
     */
    getStreamingDistribution20200531(req: operations.GetStreamingDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistribution20200531Response>;
    /**
     * Get the configuration information about a streaming distribution.
     */
    getStreamingDistributionConfig20200531(req: operations.GetStreamingDistributionConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistributionConfig20200531Response>;
    /**
     * <p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listCachePolicies20200531(req: operations.ListCachePolicies20200531Request, config?: AxiosRequestConfig): Promise<operations.ListCachePolicies20200531Response>;
    /**
     * Lists origin access identities.
     */
    listCloudFrontOriginAccessIdentities20200531(req: operations.ListCloudFrontOriginAccessIdentities20200531Request, config?: AxiosRequestConfig): Promise<operations.ListCloudFrontOriginAccessIdentities20200531Response>;
    /**
     * <p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services accounts for each conflicting alias. In the returned list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p> <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting aliases, you provide the alias to search and the ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias. For more information, including how to set up the distribution and certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listConflictingAliases20200531(req: operations.ListConflictingAliases20200531Request, config?: AxiosRequestConfig): Promise<operations.ListConflictingAliases20200531Response>;
    /**
     * <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listContinuousDeploymentPolicies20200531(req: operations.ListContinuousDeploymentPolicies20200531Request, config?: AxiosRequestConfig): Promise<operations.ListContinuousDeploymentPolicies20200531Response>;
    /**
     * List CloudFront distributions.
     */
    listDistributions20200531(req: operations.ListDistributions20200531Request, config?: AxiosRequestConfig): Promise<operations.ListDistributions20200531Response>;
    /**
     * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listDistributionsByCachePolicyId20200531(req: operations.ListDistributionsByCachePolicyId20200531Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByCachePolicyId20200531Response>;
    /**
     * <p>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listDistributionsByKeyGroup20200531(req: operations.ListDistributionsByKeyGroup20200531Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByKeyGroup20200531Response>;
    /**
     * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listDistributionsByOriginRequestPolicyId20200531(req: operations.ListDistributionsByOriginRequestPolicyId20200531Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByOriginRequestPolicyId20200531Response>;
    /**
     * <p>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.</p> <p>You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listDistributionsByRealtimeLogConfig20200531(req: operations.ListDistributionsByRealtimeLogConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByRealtimeLogConfig20200531Response>;
    /**
     * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listDistributionsByResponseHeadersPolicyId20200531(req: operations.ListDistributionsByResponseHeadersPolicyId20200531Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByResponseHeadersPolicyId20200531Response>;
    /**
     * List the distributions that are associated with a specified WAF web ACL.
     */
    listDistributionsByWebACLId20200531(req: operations.ListDistributionsByWebACLId20200531Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByWebACLId20200531Response>;
    /**
     * List all field-level encryption configurations that have been created in CloudFront for this account.
     */
    listFieldLevelEncryptionConfigs20200531(req: operations.ListFieldLevelEncryptionConfigs20200531Request, config?: AxiosRequestConfig): Promise<operations.ListFieldLevelEncryptionConfigs20200531Response>;
    /**
     * Request a list of field-level encryption profiles that have been created in CloudFront for this account.
     */
    listFieldLevelEncryptionProfiles20200531(req: operations.ListFieldLevelEncryptionProfiles20200531Request, config?: AxiosRequestConfig): Promise<operations.ListFieldLevelEncryptionProfiles20200531Response>;
    /**
     * <p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listFunctions20200531(req: operations.ListFunctions20200531Request, config?: AxiosRequestConfig): Promise<operations.ListFunctions20200531Response>;
    /**
     * Lists invalidation batches.
     */
    listInvalidations20200531(req: operations.ListInvalidations20200531Request, config?: AxiosRequestConfig): Promise<operations.ListInvalidations20200531Response>;
    /**
     * <p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listKeyGroups20200531(req: operations.ListKeyGroups20200531Request, config?: AxiosRequestConfig): Promise<operations.ListKeyGroups20200531Response>;
    /**
     * <p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>
     */
    listOriginAccessControls20200531(req: operations.ListOriginAccessControls20200531Request, config?: AxiosRequestConfig): Promise<operations.ListOriginAccessControls20200531Response>;
    /**
     * <p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listOriginRequestPolicies20200531(req: operations.ListOriginRequestPolicies20200531Request, config?: AxiosRequestConfig): Promise<operations.ListOriginRequestPolicies20200531Response>;
    /**
     * List all public keys that have been added to CloudFront for this account.
     */
    listPublicKeys20200531(req: operations.ListPublicKeys20200531Request, config?: AxiosRequestConfig): Promise<operations.ListPublicKeys20200531Response>;
    /**
     * <p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listRealtimeLogConfigs20200531(req: operations.ListRealtimeLogConfigs20200531Request, config?: AxiosRequestConfig): Promise<operations.ListRealtimeLogConfigs20200531Response>;
    /**
     * <p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
     */
    listResponseHeadersPolicies20200531(req: operations.ListResponseHeadersPolicies20200531Request, config?: AxiosRequestConfig): Promise<operations.ListResponseHeadersPolicies20200531Response>;
    /**
     * List streaming distributions.
     */
    listStreamingDistributions20200531(req: operations.ListStreamingDistributions20200531Request, config?: AxiosRequestConfig): Promise<operations.ListStreamingDistributions20200531Response>;
    /**
     * List tags for a CloudFront resource.
     */
    listTagsForResource20200531(req: operations.ListTagsForResource20200531Request, config?: AxiosRequestConfig): Promise<operations.ListTagsForResource20200531Response>;
    /**
     * <p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
     */
    publishFunction20200531(req: operations.PublishFunction20200531Request, config?: AxiosRequestConfig): Promise<operations.PublishFunction20200531Response>;
    /**
     * Add tags to a CloudFront resource.
     */
    tagResource20200531(req: operations.TagResource20200531Request, config?: AxiosRequestConfig): Promise<operations.TagResource20200531Response>;
    /**
     * <p>Tests a CloudFront function.</p> <p>To test a function, you provide an <i>event object</i> that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>To test a function, you provide the function's name and version (<code>ETag</code> value) along with the event object. To get the function's name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
     */
    testFunction20200531(req: operations.TestFunction20200531Request, config?: AxiosRequestConfig): Promise<operations.TestFunction20200531Response>;
    /**
     * Remove tags from a CloudFront resource.
     */
    untagResource20200531(req: operations.UntagResource20200531Request, config?: AxiosRequestConfig): Promise<operations.UntagResource20200531Response>;
    /**
     * <p>Updates a cache policy configuration.</p> <p>When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:</p> <ol> <li> <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the cache policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
     */
    updateCachePolicy20200531(req: operations.UpdateCachePolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateCachePolicy20200531Response>;
    /**
     * Update an origin access identity.
     */
    updateCloudFrontOriginAccessIdentity20200531(req: operations.UpdateCloudFrontOriginAccessIdentity20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateCloudFrontOriginAccessIdentity20200531Response>;
    /**
     * <p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
     */
    updateContinuousDeploymentPolicy20200531(req: operations.UpdateContinuousDeploymentPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateContinuousDeploymentPolicy20200531Response>;
    /**
     * <p>Updates the configuration for a CloudFront distribution.</p> <p>The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Use <code>GetDistributionConfig</code> to get the current configuration, including the version identifier (<code>ETag</code>).</p> </li> <li> <p>Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:</p> <ul> <li> <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>, leaving the value unchanged. (Set the value of <code>IfMatch</code> to the value of <code>ETag</code>, then remove the <code>ETag</code> field.)</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>.</p> </li> </ul> </li> <li> <p>Submit an <code>UpdateDistribution</code> request, providing the distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</p> </li> </ol>
     */
    updateDistribution20200531(req: operations.UpdateDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateDistribution20200531Response>;
    /**
     * <p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p>
     */
    updateDistributionWithStagingConfig20200531(req: operations.UpdateDistributionWithStagingConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateDistributionWithStagingConfig20200531Response>;
    /**
     * Update a field-level encryption configuration.
     */
    updateFieldLevelEncryptionConfig20200531(req: operations.UpdateFieldLevelEncryptionConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateFieldLevelEncryptionConfig20200531Response>;
    /**
     * Update a field-level encryption profile.
     */
    updateFieldLevelEncryptionProfile20200531(req: operations.UpdateFieldLevelEncryptionProfile20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateFieldLevelEncryptionProfile20200531Response>;
    /**
     * <p>Updates a CloudFront function.</p> <p>You can update a function's code or the comment that describes the function. You cannot update a function's name.</p> <p>To update a function, you provide the function's name and version (<code>ETag</code> value) along with the updated function code. To get the name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
     */
    updateFunction20200531(req: operations.UpdateFunction20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateFunction20200531Response>;
    /**
     * <p>Updates a key group.</p> <p>When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:</p> <ol> <li> <p>Get the current key group with <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p> </li> <li> <p>Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.</p> </li> <li> <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including the fields that you modified and those that you didn't.</p> </li> </ol>
     */
    updateKeyGroup20200531(req: operations.UpdateKeyGroup20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateKeyGroup20200531Response>;
    /**
     * Updates a CloudFront origin access control.
     */
    updateOriginAccessControl20200531(req: operations.UpdateOriginAccessControl20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateOriginAccessControl20200531Response>;
    /**
     * <p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
     */
    updateOriginRequestPolicy20200531(req: operations.UpdateOriginRequestPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateOriginRequestPolicy20200531Response>;
    /**
     * Update public key information. Note that the only value you can change is the comment.
     */
    updatePublicKey20200531(req: operations.UpdatePublicKey20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdatePublicKey20200531Response>;
    /**
     * <p>Updates a real-time log configuration.</p> <p>When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:</p> <ol> <li> <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log configuration.</p> </li> <li> <p>Locally modify the parameters in the real-time log configuration that you want to update.</p> </li> <li> <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.</p> </li> </ol> <p>You cannot update a real-time log configuration's <code>Name</code> or <code>ARN</code>.</p>
     */
    updateRealtimeLogConfig20200531(req: operations.UpdateRealtimeLogConfig20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateRealtimeLogConfig20200531Response>;
    /**
     * <p>Updates a response headers policy.</p> <p>When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:</p> <ol> <li> <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's configuration.</p> </li> <li> <p>Modify the fields in the response headers policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
     */
    updateResponseHeadersPolicy20200531(req: operations.UpdateResponseHeadersPolicy20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateResponseHeadersPolicy20200531Response>;
    /**
     * Update a streaming distribution.
     */
    updateStreamingDistribution20200531(req: operations.UpdateStreamingDistribution20200531Request, config?: AxiosRequestConfig): Promise<operations.UpdateStreamingDistribution20200531Response>;
}
