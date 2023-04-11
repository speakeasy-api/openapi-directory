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
 * <fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about the CloudFront API actions, data types, and errors. For detailed information about CloudFront features and their associated API calls, see the <i>Amazon CloudFront Developer Guide</i>.</p>
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
     * Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
     */
    createCloudFrontOriginAccessIdentity20161125(req: operations.CreateCloudFrontOriginAccessIdentity20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateCloudFrontOriginAccessIdentity20161125Response>;
    /**
     * Creates a new web distribution. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.
     */
    createDistribution20161125(req: operations.CreateDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateDistribution20161125Response>;
    /**
     * Create a new distribution with tags.
     */
    createDistributionWithTags20161125(req: operations.CreateDistributionWithTags20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateDistributionWithTags20161125Response>;
    /**
     * Create a new invalidation.
     */
    createInvalidation20161125(req: operations.CreateInvalidation20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateInvalidation20161125Response>;
    /**
     * <p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
     */
    createStreamingDistribution20161125(req: operations.CreateStreamingDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistribution20161125Response>;
    /**
     * Create a new streaming distribution with tags.
     */
    createStreamingDistributionWithTags20161125(req: operations.CreateStreamingDistributionWithTags20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistributionWithTags20161125Response>;
    /**
     * Delete an origin access identity.
     */
    deleteCloudFrontOriginAccessIdentity20161125(req: operations.DeleteCloudFrontOriginAccessIdentity20161125Request, config?: AxiosRequestConfig): Promise<operations.DeleteCloudFrontOriginAccessIdentity20161125Response>;
    /**
     * Delete a distribution.
     */
    deleteDistribution20161125(req: operations.DeleteDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.DeleteDistribution20161125Response>;
    /**
     * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
     */
    deleteStreamingDistribution20161125(req: operations.DeleteStreamingDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingDistribution20161125Response>;
    /**
     * Get the information about an origin access identity.
     */
    getCloudFrontOriginAccessIdentity20161125(req: operations.GetCloudFrontOriginAccessIdentity20161125Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentity20161125Response>;
    /**
     * Get the configuration information about an origin access identity.
     */
    getCloudFrontOriginAccessIdentityConfig20161125(req: operations.GetCloudFrontOriginAccessIdentityConfig20161125Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentityConfig20161125Response>;
    /**
     * Get the information about a distribution.
     */
    getDistribution20161125(req: operations.GetDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.GetDistribution20161125Response>;
    /**
     * Get the configuration information about a distribution.
     */
    getDistributionConfig20161125(req: operations.GetDistributionConfig20161125Request, config?: AxiosRequestConfig): Promise<operations.GetDistributionConfig20161125Response>;
    /**
     * Get the information about an invalidation.
     */
    getInvalidation20161125(req: operations.GetInvalidation20161125Request, config?: AxiosRequestConfig): Promise<operations.GetInvalidation20161125Response>;
    /**
     * Gets information about a specified RTMP distribution, including the distribution configuration.
     */
    getStreamingDistribution20161125(req: operations.GetStreamingDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistribution20161125Response>;
    /**
     * Get the configuration information about a streaming distribution.
     */
    getStreamingDistributionConfig20161125(req: operations.GetStreamingDistributionConfig20161125Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistributionConfig20161125Response>;
    /**
     * Lists origin access identities.
     */
    listCloudFrontOriginAccessIdentities20161125(req: operations.ListCloudFrontOriginAccessIdentities20161125Request, config?: AxiosRequestConfig): Promise<operations.ListCloudFrontOriginAccessIdentities20161125Response>;
    /**
     * List distributions.
     */
    listDistributions20161125(req: operations.ListDistributions20161125Request, config?: AxiosRequestConfig): Promise<operations.ListDistributions20161125Response>;
    /**
     * List the distributions that are associated with a specified AWS WAF web ACL.
     */
    listDistributionsByWebACLId20161125(req: operations.ListDistributionsByWebACLId20161125Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByWebACLId20161125Response>;
    /**
     * Lists invalidation batches.
     */
    listInvalidations20161125(req: operations.ListInvalidations20161125Request, config?: AxiosRequestConfig): Promise<operations.ListInvalidations20161125Response>;
    /**
     * List streaming distributions.
     */
    listStreamingDistributions20161125(req: operations.ListStreamingDistributions20161125Request, config?: AxiosRequestConfig): Promise<operations.ListStreamingDistributions20161125Response>;
    /**
     * List tags for a CloudFront resource.
     */
    listTagsForResource20161125(req: operations.ListTagsForResource20161125Request, config?: AxiosRequestConfig): Promise<operations.ListTagsForResource20161125Response>;
    /**
     * Add tags to a CloudFront resource.
     */
    tagResource20161125(req: operations.TagResource20161125Request, config?: AxiosRequestConfig): Promise<operations.TagResource20161125Response>;
    /**
     * Remove tags from a CloudFront resource.
     */
    untagResource20161125(req: operations.UntagResource20161125Request, config?: AxiosRequestConfig): Promise<operations.UntagResource20161125Response>;
    /**
     * Update an origin access identity.
     */
    updateCloudFrontOriginAccessIdentity20161125(req: operations.UpdateCloudFrontOriginAccessIdentity20161125Request, config?: AxiosRequestConfig): Promise<operations.UpdateCloudFrontOriginAccessIdentity20161125Response>;
    /**
     * Update a distribution.
     */
    updateDistribution20161125(req: operations.UpdateDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.UpdateDistribution20161125Response>;
    /**
     * Update a streaming distribution.
     */
    updateStreamingDistribution20161125(req: operations.UpdateStreamingDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.UpdateStreamingDistribution20161125Response>;
}
