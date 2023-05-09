# SDK

## Overview

<fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudfront/>
### Available Operations

* [AssociateAlias20200531](#associatealias20200531) - <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that's already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [CopyDistribution20200531](#copydistribution20200531) - <p>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.</p> <p>After you create a staging distribution, you can use <code>UpdateDistribution</code> to modify the staging distribution's configuration. Then you can use <code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the staging distribution.</p>
* [CreateCachePolicy20200531](#createcachepolicy20200531) - <p>Creates a cache policy.</p> <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the <i>cache key</i>. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [CreateCloudFrontOriginAccessIdentity20200531](#createcloudfrontoriginaccessidentity20200531) - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
* [CreateContinuousDeploymentPolicy20200531](#createcontinuousdeploymentpolicy20200531) - <p>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.</p> <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to create a staging distribution, then use <code>UpdateDistribution</code> to modify the staging distribution's configuration.</p> <p>After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</p>
* [CreateDistribution20200531](#createdistribution20200531) - Creates a CloudFront distribution.
* [CreateDistributionWithTags20200531](#createdistributionwithtags20200531) - Create a new distribution with tags.
* [CreateFieldLevelEncryptionConfig20200531](#createfieldlevelencryptionconfig20200531) - Create a new field-level encryption configuration.
* [CreateFieldLevelEncryptionProfile20200531](#createfieldlevelencryptionprofile20200531) - Create a field-level encryption profile.
* [CreateFunction20200531](#createfunction20200531) - <p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>
* [CreateInvalidation20200531](#createinvalidation20200531) - Create a new invalidation.
* [CreateKeyGroup20200531](#createkeygroup20200531) - <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [CreateMonitoringSubscription20200531](#createmonitoringsubscription20200531) - <p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [CreateOriginAccessControl20200531](#createoriginaccesscontrol20200531) - <p>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</p> <p>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.</p> <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [CreateOriginRequestPolicy20200531](#createoriginrequestpolicy20200531) - <p>Creates an origin request policy.</p> <p>After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [CreatePublicKey20200531](#createpublickey20200531) - Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
* [CreateRealtimeLogConfig20200531](#createrealtimelogconfig20200531) - <p>Creates a real-time log configuration.</p> <p>After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p> <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [CreateResponseHeadersPolicy20200531](#createresponseheaderspolicy20200531) - <p>Creates a response headers policy.</p> <p>A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [CreateStreamingDistribution20200531](#createstreamingdistribution20200531) - This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
* [CreateStreamingDistributionWithTags20200531](#createstreamingdistributionwithtags20200531) - This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.
* [DeleteCachePolicy20200531](#deletecachepolicy20200531) - <p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>
* [DeleteCloudFrontOriginAccessIdentity20200531](#deletecloudfrontoriginaccessidentity20200531) - Delete an origin access identity.
* [DeleteContinuousDeploymentPolicy20200531](#deletecontinuousdeploymentpolicy20200531) - <p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>
* [DeleteDistribution20200531](#deletedistribution20200531) - Delete a distribution.
* [DeleteFieldLevelEncryptionConfig20200531](#deletefieldlevelencryptionconfig20200531) - Remove a field-level encryption configuration.
* [DeleteFieldLevelEncryptionProfile20200531](#deletefieldlevelencryptionprofile20200531) - Remove a field-level encryption profile.
* [DeleteFunction20200531](#deletefunction20200531) - <p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
* [DeleteKeyGroup20200531](#deletekeygroup20200531) - <p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>
* [DeleteMonitoringSubscription20200531](#deletemonitoringsubscription20200531) - Disables additional CloudWatch metrics for the specified CloudFront distribution.
* [DeleteOriginAccessControl20200531](#deleteoriginaccesscontrol20200531) - <p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>
* [DeleteOriginRequestPolicy20200531](#deleteoriginrequestpolicy20200531) - <p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>
* [DeletePublicKey20200531](#deletepublickey20200531) - Remove a public key you previously added to CloudFront.
* [DeleteRealtimeLogConfig20200531](#deleterealtimelogconfig20200531) - <p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>
* [DeleteResponseHeadersPolicy20200531](#deleteresponseheaderspolicy20200531) - <p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>
* [DeleteStreamingDistribution20200531](#deletestreamingdistribution20200531) - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* [DescribeFunction20200531](#describefunction20200531) - <p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
* [GetCachePolicy20200531](#getcachepolicy20200531) - <p>Gets a cache policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
* [GetCachePolicyConfig20200531](#getcachepolicyconfig20200531) - <p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>
* [GetCloudFrontOriginAccessIdentity20200531](#getcloudfrontoriginaccessidentity20200531) - Get the information about an origin access identity.
* [GetCloudFrontOriginAccessIdentityConfig20200531](#getcloudfrontoriginaccessidentityconfig20200531) - Get the configuration information about an origin access identity.
* [GetContinuousDeploymentPolicy20200531](#getcontinuousdeploymentpolicy20200531) - Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).
* [GetContinuousDeploymentPolicyConfig20200531](#getcontinuousdeploymentpolicyconfig20200531) - Gets configuration information about a continuous deployment policy.
* [GetDistribution20200531](#getdistribution20200531) - Get the information about a distribution.
* [GetDistributionConfig20200531](#getdistributionconfig20200531) - Get the configuration information about a distribution.
* [GetFieldLevelEncryption20200531](#getfieldlevelencryption20200531) - Get the field-level encryption configuration information.
* [GetFieldLevelEncryptionConfig20200531](#getfieldlevelencryptionconfig20200531) - Get the field-level encryption configuration information.
* [GetFieldLevelEncryptionProfile20200531](#getfieldlevelencryptionprofile20200531) - Get the field-level encryption profile information.
* [GetFieldLevelEncryptionProfileConfig20200531](#getfieldlevelencryptionprofileconfig20200531) - Get the field-level encryption profile configuration information.
* [GetFunction20200531](#getfunction20200531) - <p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>
* [GetInvalidation20200531](#getinvalidation20200531) - Get the information about an invalidation.
* [GetKeyGroup20200531](#getkeygroup20200531) - <p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
* [GetKeyGroupConfig20200531](#getkeygroupconfig20200531) - <p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>
* [GetMonitoringSubscription20200531](#getmonitoringsubscription20200531) - Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.
* [GetOriginAccessControl20200531](#getoriginaccesscontrol20200531) - Gets a CloudFront origin access control, including its unique identifier.
* [GetOriginAccessControlConfig20200531](#getoriginaccesscontrolconfig20200531) - Gets a CloudFront origin access control configuration.
* [GetOriginRequestPolicy20200531](#getoriginrequestpolicy20200531) - <p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
* [GetOriginRequestPolicyConfig20200531](#getoriginrequestpolicyconfig20200531) - <p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>
* [GetPublicKey20200531](#getpublickey20200531) - Gets a public key.
* [GetPublicKeyConfig20200531](#getpublickeyconfig20200531) - Gets a public key configuration.
* [GetRealtimeLogConfig20200531](#getrealtimelogconfig20200531) - <p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>
* [GetResponseHeadersPolicy20200531](#getresponseheaderspolicy20200531) - <p>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p> <p>To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
* [GetResponseHeadersPolicyConfig20200531](#getresponseheaderspolicyconfig20200531) - <p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>
* [GetStreamingDistribution20200531](#getstreamingdistribution20200531) - Gets information about a specified RTMP distribution, including the distribution configuration.
* [GetStreamingDistributionConfig20200531](#getstreamingdistributionconfig20200531) - Get the configuration information about a streaming distribution.
* [ListCachePolicies20200531](#listcachepolicies20200531) - <p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListCloudFrontOriginAccessIdentities20200531](#listcloudfrontoriginaccessidentities20200531) - Lists origin access identities.
* [ListConflictingAliases20200531](#listconflictingaliases20200531) - <p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services accounts for each conflicting alias. In the returned list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p> <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting aliases, you provide the alias to search and the ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias. For more information, including how to set up the distribution and certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListContinuousDeploymentPolicies20200531](#listcontinuousdeploymentpolicies20200531) - <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListDistributions20200531](#listdistributions20200531) - List CloudFront distributions.
* [ListDistributionsByCachePolicyId20200531](#listdistributionsbycachepolicyid20200531) - <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListDistributionsByKeyGroup20200531](#listdistributionsbykeygroup20200531) - <p>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListDistributionsByOriginRequestPolicyId20200531](#listdistributionsbyoriginrequestpolicyid20200531) - <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListDistributionsByRealtimeLogConfig20200531](#listdistributionsbyrealtimelogconfig20200531) - <p>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.</p> <p>You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListDistributionsByResponseHeadersPolicyId20200531](#listdistributionsbyresponseheaderspolicyid20200531) - <p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListDistributionsByWebACLId20200531](#listdistributionsbywebaclid20200531) - List the distributions that are associated with a specified WAF web ACL.
* [ListFieldLevelEncryptionConfigs20200531](#listfieldlevelencryptionconfigs20200531) - List all field-level encryption configurations that have been created in CloudFront for this account.
* [ListFieldLevelEncryptionProfiles20200531](#listfieldlevelencryptionprofiles20200531) - Request a list of field-level encryption profiles that have been created in CloudFront for this account.
* [ListFunctions20200531](#listfunctions20200531) - <p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListInvalidations20200531](#listinvalidations20200531) - Lists invalidation batches.
* [ListKeyGroups20200531](#listkeygroups20200531) - <p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListOriginAccessControls20200531](#listoriginaccesscontrols20200531) - <p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>
* [ListOriginRequestPolicies20200531](#listoriginrequestpolicies20200531) - <p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListPublicKeys20200531](#listpublickeys20200531) - List all public keys that have been added to CloudFront for this account.
* [ListRealtimeLogConfigs20200531](#listrealtimelogconfigs20200531) - <p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListResponseHeadersPolicies20200531](#listresponseheaderspolicies20200531) - <p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>
* [ListStreamingDistributions20200531](#liststreamingdistributions20200531) - List streaming distributions.
* [ListTagsForResource20200531](#listtagsforresource20200531) - List tags for a CloudFront resource.
* [PublishFunction20200531](#publishfunction20200531) - <p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
* [TagResource20200531](#tagresource20200531) - Add tags to a CloudFront resource.
* [TestFunction20200531](#testfunction20200531) - <p>Tests a CloudFront function.</p> <p>To test a function, you provide an <i>event object</i> that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>To test a function, you provide the function's name and version (<code>ETag</code> value) along with the event object. To get the function's name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
* [UntagResource20200531](#untagresource20200531) - Remove tags from a CloudFront resource.
* [UpdateCachePolicy20200531](#updatecachepolicy20200531) - <p>Updates a cache policy configuration.</p> <p>When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:</p> <ol> <li> <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the cache policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
* [UpdateCloudFrontOriginAccessIdentity20200531](#updatecloudfrontoriginaccessidentity20200531) - Update an origin access identity.
* [UpdateContinuousDeploymentPolicy20200531](#updatecontinuousdeploymentpolicy20200531) - <p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
* [UpdateDistribution20200531](#updatedistribution20200531) - <p>Updates the configuration for a CloudFront distribution.</p> <p>The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Use <code>GetDistributionConfig</code> to get the current configuration, including the version identifier (<code>ETag</code>).</p> </li> <li> <p>Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:</p> <ul> <li> <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>, leaving the value unchanged. (Set the value of <code>IfMatch</code> to the value of <code>ETag</code>, then remove the <code>ETag</code> field.)</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>.</p> </li> </ul> </li> <li> <p>Submit an <code>UpdateDistribution</code> request, providing the distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</p> </li> </ol>
* [UpdateDistributionWithStagingConfig20200531](#updatedistributionwithstagingconfig20200531) - <p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p>
* [UpdateFieldLevelEncryptionConfig20200531](#updatefieldlevelencryptionconfig20200531) - Update a field-level encryption configuration.
* [UpdateFieldLevelEncryptionProfile20200531](#updatefieldlevelencryptionprofile20200531) - Update a field-level encryption profile.
* [UpdateFunction20200531](#updatefunction20200531) - <p>Updates a CloudFront function.</p> <p>You can update a function's code or the comment that describes the function. You cannot update a function's name.</p> <p>To update a function, you provide the function's name and version (<code>ETag</code> value) along with the updated function code. To get the name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
* [UpdateKeyGroup20200531](#updatekeygroup20200531) - <p>Updates a key group.</p> <p>When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:</p> <ol> <li> <p>Get the current key group with <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p> </li> <li> <p>Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.</p> </li> <li> <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including the fields that you modified and those that you didn't.</p> </li> </ol>
* [UpdateOriginAccessControl20200531](#updateoriginaccesscontrol20200531) - Updates a CloudFront origin access control.
* [UpdateOriginRequestPolicy20200531](#updateoriginrequestpolicy20200531) - <p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
* [UpdatePublicKey20200531](#updatepublickey20200531) - Update public key information. Note that the only value you can change is the comment.
* [UpdateRealtimeLogConfig20200531](#updaterealtimelogconfig20200531) - <p>Updates a real-time log configuration.</p> <p>When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:</p> <ol> <li> <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log configuration.</p> </li> <li> <p>Locally modify the parameters in the real-time log configuration that you want to update.</p> </li> <li> <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.</p> </li> </ol> <p>You cannot update a real-time log configuration's <code>Name</code> or <code>ARN</code>.</p>
* [UpdateResponseHeadersPolicy20200531](#updateresponseheaderspolicy20200531) - <p>Updates a response headers policy.</p> <p>When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:</p> <ol> <li> <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's configuration.</p> </li> <li> <p>Modify the fields in the response headers policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>
* [UpdateStreamingDistribution20200531](#updatestreamingdistribution20200531) - Update a streaming distribution.

## AssociateAlias20200531

<p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that's already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateAlias20200531(ctx, operations.AssociateAlias20200531Request{
        Alias: "error",
        TargetDistributionID: "deserunt",
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CopyDistribution20200531

<p>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.</p> <p>After you create a staging distribution, you can use <code>UpdateDistribution</code> to modify the staging distribution's configuration. Then you can use <code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the staging distribution.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CopyDistribution20200531(ctx, operations.CopyDistribution20200531Request{
        IfMatch: sdk.String("suscipit"),
        PrimaryDistributionID: "molestiae",
        RequestBody: []byte("minus"),
        Staging: sdk.Bool(false),
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("voluptatum"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateCachePolicy20200531

<p>Creates a cache policy.</p> <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the <i>cache key</i>. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateCachePolicy20200531(ctx, operations.CreateCachePolicy20200531Request{
        RequestBody: []byte("ab"),
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateCloudFrontOriginAccessIdentity20200531

Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCloudFrontOriginAccessIdentity20200531(ctx, operations.CreateCloudFrontOriginAccessIdentity20200531Request{
        RequestBody: []byte("quo"),
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateContinuousDeploymentPolicy20200531

<p>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.</p> <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to create a staging distribution, then use <code>UpdateDistribution</code> to modify the staging distribution's configuration.</p> <p>After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</p>

### Example Usage

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
    res, err := s.SDK.CreateContinuousDeploymentPolicy20200531(ctx, operations.CreateContinuousDeploymentPolicy20200531Request{
        RequestBody: []byte("esse"),
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateDistribution20200531

Creates a CloudFront distribution.

### Example Usage

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
    res, err := s.SDK.CreateDistribution20200531(ctx, operations.CreateDistribution20200531Request{
        RequestBody: []byte("fugit"),
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateDistributionWithTags20200531

Create a new distribution with tags.

### Example Usage

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
    res, err := s.SDK.CreateDistributionWithTags20200531(ctx, operations.CreateDistributionWithTags20200531Request{
        RequestBody: []byte("modi"),
        WithTags: false,
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateFieldLevelEncryptionConfig20200531

Create a new field-level encryption configuration.

### Example Usage

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
    res, err := s.SDK.CreateFieldLevelEncryptionConfig20200531(ctx, operations.CreateFieldLevelEncryptionConfig20200531Request{
        RequestBody: []byte("perferendis"),
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateFieldLevelEncryptionProfile20200531

Create a field-level encryption profile.

### Example Usage

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
    res, err := s.SDK.CreateFieldLevelEncryptionProfile20200531(ctx, operations.CreateFieldLevelEncryptionProfile20200531Request{
        RequestBody: []byte("hic"),
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("iste"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateFunction20200531

<p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>

### Example Usage

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
    res, err := s.SDK.CreateFunction20200531(ctx, operations.CreateFunction20200531Request{
        RequestBody: []byte("quidem"),
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dolores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateInvalidation20200531

Create a new invalidation.

### Example Usage

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
    res, err := s.SDK.CreateInvalidation20200531(ctx, operations.CreateInvalidation20200531Request{
        DistributionID: "dolorem",
        RequestBody: []byte("corporis"),
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateKeyGroup20200531

<p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateKeyGroup20200531(ctx, operations.CreateKeyGroup20200531Request{
        RequestBody: []byte("accusantium"),
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("architecto"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("dolorem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateMonitoringSubscription20200531

<p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateMonitoringSubscription20200531(ctx, operations.CreateMonitoringSubscription20200531Request{
        DistributionID: "culpa",
        RequestBody: []byte("consequuntur"),
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateOriginAccessControl20200531

<p>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</p> <p>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.</p> <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html">Restricting access to an Amazon Web Services origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateOriginAccessControl20200531(ctx, operations.CreateOriginAccessControl20200531Request{
        RequestBody: []byte("velit"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateOriginRequestPolicy20200531

<p>Creates an origin request policy.</p> <p>After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateOriginRequestPolicy20200531(ctx, operations.CreateOriginRequestPolicy20200531Request{
        RequestBody: []byte("odit"),
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreatePublicKey20200531

Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePublicKey20200531(ctx, operations.CreatePublicKey20200531Request{
        RequestBody: []byte("quasi"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateRealtimeLogConfig20200531

<p>Creates a real-time log configuration.</p> <p>After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p> <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateRealtimeLogConfig20200531(ctx, operations.CreateRealtimeLogConfig20200531Request{
        RequestBody: []byte("nihil"),
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateResponseHeadersPolicy20200531

<p>Creates a response headers policy.</p> <p>A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

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
    res, err := s.SDK.CreateResponseHeadersPolicy20200531(ctx, operations.CreateResponseHeadersPolicy20200531Request{
        RequestBody: []byte("doloremque"),
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateStreamingDistribution20200531

This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.

### Example Usage

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
    res, err := s.SDK.CreateStreamingDistribution20200531(ctx, operations.CreateStreamingDistribution20200531Request{
        RequestBody: []byte("dicta"),
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## CreateStreamingDistributionWithTags20200531

This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.

### Example Usage

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
    res, err := s.SDK.CreateStreamingDistributionWithTags20200531(ctx, operations.CreateStreamingDistributionWithTags20200531Request{
        RequestBody: []byte("quidem"),
        WithTags: false,
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptates"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DeleteCachePolicy20200531

<p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCachePolicy20200531(ctx, operations.DeleteCachePolicy20200531Request{
        ID: "1e91e450-ad2a-4bd4-8269-802d502a94bb",
        IfMatch: sdk.String("labore"),
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("eligendi"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCloudFrontOriginAccessIdentity20200531

Delete an origin access identity.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCloudFrontOriginAccessIdentity20200531(ctx, operations.DeleteCloudFrontOriginAccessIdentity20200531Request{
        ID: "e9a3efa7-7dfb-414c-966a-e395efb9ba88",
        IfMatch: sdk.String("sapiente"),
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteContinuousDeploymentPolicy20200531

<p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteContinuousDeploymentPolicy20200531(ctx, operations.DeleteContinuousDeploymentPolicy20200531Request{
        ID: "074ba446-9b6e-4214-9959-890afa563e25",
        IfMatch: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("maxime"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDistribution20200531

Delete a distribution.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDistribution20200531(ctx, operations.DeleteDistribution20200531Request{
        ID: "711e5b7f-d2ed-4028-921c-ddc692601fb5",
        IfMatch: sdk.String("voluptate"),
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFieldLevelEncryptionConfig20200531

Remove a field-level encryption configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFieldLevelEncryptionConfig20200531(ctx, operations.DeleteFieldLevelEncryptionConfig20200531Request{
        ID: "d30c5fbb-2587-4053-a02c-73d5fe9b90c2",
        IfMatch: sdk.String("blanditiis"),
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("earum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFieldLevelEncryptionProfile20200531

Remove a field-level encryption profile.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFieldLevelEncryptionProfile20200531(ctx, operations.DeleteFieldLevelEncryptionProfile20200531Request{
        ID: "49a8d9cb-f486-4333-a3f9-b77f3a410067",
        IfMatch: sdk.String("quaerat"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteFunction20200531

<p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFunction20200531(ctx, operations.DeleteFunction20200531Request{
        IfMatch: "sit",
        Name: "Stephen Roberts",
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteKeyGroup20200531

<p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteKeyGroup20200531(ctx, operations.DeleteKeyGroup20200531Request{
        ID: "737ae420-3ce5-4e6a-95d8-a0d446ce2af7",
        IfMatch: sdk.String("harum"),
        XAmzAlgorithm: sdk.String("iusto"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("accusamus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteMonitoringSubscription20200531

Disables additional CloudWatch metrics for the specified CloudFront distribution.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteMonitoringSubscription20200531(ctx, operations.DeleteMonitoringSubscription20200531Request{
        DistributionID: "numquam",
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## DeleteOriginAccessControl20200531

<p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOriginAccessControl20200531(ctx, operations.DeleteOriginAccessControl20200531Request{
        ID: "326b5a73-429c-4db1-a842-2bb679d23227",
        IfMatch: sdk.String("sunt"),
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOriginRequestPolicy20200531

<p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteOriginRequestPolicy20200531(ctx, operations.DeleteOriginRequestPolicy20200531Request{
        ID: "1e31b8b9-0f34-443a-9108-e0adcf4b9218",
        IfMatch: sdk.String("odio"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeletePublicKey20200531

Remove a public key you previously added to CloudFront.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeletePublicKey20200531(ctx, operations.DeletePublicKey20200531Request{
        ID: "f73ef7fb-c7ab-4d74-9d39-c0f5d2cff7c7",
        IfMatch: sdk.String("alias"),
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("possimus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteRealtimeLogConfig20200531

<p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRealtimeLogConfig20200531(ctx, operations.DeleteRealtimeLogConfig20200531Request{
        RequestBody: []byte("magnam"),
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("laudantium"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteResponseHeadersPolicy20200531

<p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteResponseHeadersPolicy20200531(ctx, operations.DeleteResponseHeadersPolicy20200531Request{
        ID: "6d9f5fce-6c55-4614-ac3e-250fb008c42e",
        IfMatch: sdk.String("inventore"),
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteStreamingDistribution20200531

<p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteStreamingDistribution20200531(ctx, operations.DeleteStreamingDistribution20200531Request{
        ID: "6c8dd6b1-4429-4074-b477-8a7bd466d28c",
        IfMatch: sdk.String("veritatis"),
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("quo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeFunction20200531

<p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFunction20200531(ctx, operations.DescribeFunction20200531Request{
        Name: "Herbert Daugherty V",
        Stage: operations.DescribeFunction20200531StageEnumDevelopment.ToPointer(),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCachePolicy20200531

<p>Gets a cache policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCachePolicy20200531(ctx, operations.GetCachePolicy20200531Request{
        ID: "e0bc7178-e479-46f2-a70c-688282aa4825",
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCachePolicyConfig20200531

<p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCachePolicyConfig20200531(ctx, operations.GetCachePolicyConfig20200531Request{
        ID: "9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4",
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCloudFrontOriginAccessIdentity20200531

Get the information about an origin access identity.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCloudFrontOriginAccessIdentity20200531(ctx, operations.GetCloudFrontOriginAccessIdentity20200531Request{
        ID: "871f99dd-2efd-4121-aa6f-1e674bdb04f1",
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetCloudFrontOriginAccessIdentityConfig20200531

Get the configuration information about an origin access identity.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetCloudFrontOriginAccessIdentityConfig20200531(ctx, operations.GetCloudFrontOriginAccessIdentityConfig20200531Request{
        ID: "d68ea19f-1d17-4051-b39d-08086a184039",
        XAmzAlgorithm: sdk.String("numquam"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetContinuousDeploymentPolicy20200531

Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContinuousDeploymentPolicy20200531(ctx, operations.GetContinuousDeploymentPolicy20200531Request{
        ID: "f93f5f06-42da-4c7a-b515-cc413aa63aae",
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetContinuousDeploymentPolicyConfig20200531

Gets configuration information about a continuous deployment policy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetContinuousDeploymentPolicyConfig20200531(ctx, operations.GetContinuousDeploymentPolicyConfig20200531Request{
        ID: "dbb675fd-5e60-4b37-9ed4-f6fbee41f333",
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDistribution20200531

Get the information about a distribution.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDistribution20200531(ctx, operations.GetDistribution20200531Request{
        ID: "60eb1ea4-2655-45ba-bc28-744ed53b88f3",
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetDistributionConfig20200531

Get the configuration information about a distribution.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetDistributionConfig20200531(ctx, operations.GetDistributionConfig20200531Request{
        ID: "0b2f2fb7-b194-4a27-ab26-916fe1f08f42",
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("eius"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFieldLevelEncryption20200531

Get the field-level encryption configuration information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFieldLevelEncryption20200531(ctx, operations.GetFieldLevelEncryption20200531Request{
        ID: "f447f603-e8b4-445e-80ca-55efd20e457e",
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("cum"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("dolorum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFieldLevelEncryptionConfig20200531

Get the field-level encryption configuration information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFieldLevelEncryptionConfig20200531(ctx, operations.GetFieldLevelEncryptionConfig20200531Request{
        ID: "89fbe3a5-aa8e-4482-8d0a-b4075088e518",
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFieldLevelEncryptionProfile20200531

Get the field-level encryption profile information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFieldLevelEncryptionProfile20200531(ctx, operations.GetFieldLevelEncryptionProfile20200531Request{
        ID: "04f3b119-4b8a-4bf6-83a7-9f9dfe0ab7da",
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFieldLevelEncryptionProfileConfig20200531

Get the field-level encryption profile configuration information.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFieldLevelEncryptionProfileConfig20200531(ctx, operations.GetFieldLevelEncryptionProfileConfig20200531Request{
        ID: "87f86bc1-73d6-489e-ae95-26f8d986e881",
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("repudiandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFunction20200531

<p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetFunction20200531(ctx, operations.GetFunction20200531Request{
        Name: "Ruth Breitenberg",
        Stage: operations.GetFunction20200531StageEnumDevelopment.ToPointer(),
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("occaecati"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetInvalidation20200531

Get the information about an invalidation.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetInvalidation20200531(ctx, operations.GetInvalidation20200531Request{
        DistributionID: "officiis",
        ID: "973e922a-57a1-45be-be06-0807e2b6e3ab",
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("ad"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetKeyGroup20200531

<p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetKeyGroup20200531(ctx, operations.GetKeyGroup20200531Request{
        ID: "97a60ff2-a54a-431e-9476-4a3e865e7956",
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("aspernatur"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetKeyGroupConfig20200531

<p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetKeyGroupConfig20200531(ctx, operations.GetKeyGroupConfig20200531Request{
        ID: "a9da660f-f57b-4faa-94f9-efc1b4512c10",
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("impedit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMonitoringSubscription20200531

Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetMonitoringSubscription20200531(ctx, operations.GetMonitoringSubscription20200531Request{
        DistributionID: "eos",
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetOriginAccessControl20200531

Gets a CloudFront origin access control, including its unique identifier.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOriginAccessControl20200531(ctx, operations.GetOriginAccessControl20200531Request{
        ID: "ebfd0e9f-e6c6-432c-a3ae-d0117996312f",
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetOriginAccessControlConfig20200531

Gets a CloudFront origin access control configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOriginAccessControlConfig20200531(ctx, operations.GetOriginAccessControlConfig20200531Request{
        ID: "778ff61d-0174-4763-a0a1-5db6a660659a",
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetOriginRequestPolicy20200531

<p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOriginRequestPolicy20200531(ctx, operations.GetOriginRequestPolicy20200531Request{
        ID: "5851d6c6-45b0-48b6-9891-baa0fe1ade00",
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetOriginRequestPolicyConfig20200531

<p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetOriginRequestPolicyConfig20200531(ctx, operations.GetOriginRequestPolicyConfig20200531Request{
        ID: "f350d8cd-b5a3-4418-9430-10421813d520",
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sed"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPublicKey20200531

Gets a public key.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPublicKey20200531(ctx, operations.GetPublicKey20200531Request{
        ID: "53b66845-1c6c-46e2-85e1-6deab3fec957",
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetPublicKeyConfig20200531

Gets a public key configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetPublicKeyConfig20200531(ctx, operations.GetPublicKeyConfig20200531Request{
        ID: "273a8418-d162-4309-bb09-29921aefb9f5",
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetRealtimeLogConfig20200531

<p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetRealtimeLogConfig20200531(ctx, operations.GetRealtimeLogConfig20200531Request{
        RequestBody: []byte("commodi"),
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetResponseHeadersPolicy20200531

<p>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p> <p>To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetResponseHeadersPolicy20200531(ctx, operations.GetResponseHeadersPolicy20200531Request{
        ID: "6013f59d-a757-4a59-acfe-f66ef1caa338",
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetResponseHeadersPolicyConfig20200531

<p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetResponseHeadersPolicyConfig20200531(ctx, operations.GetResponseHeadersPolicyConfig20200531Request{
        ID: "77373c8d-72f6-44d1-9b1f-2c4310661e96",
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("perspiciatis"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetStreamingDistribution20200531

Gets information about a specified RTMP distribution, including the distribution configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStreamingDistribution20200531(ctx, operations.GetStreamingDistribution20200531Request{
        ID: "9e06e3a4-3700-40ae-ab6b-c9b8f759eac5",
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetStreamingDistributionConfig20200531

Get the configuration information about a streaming distribution.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.GetStreamingDistributionConfig20200531(ctx, operations.GetStreamingDistributionConfig20200531Request{
        ID: "31135296-5bb8-4a72-8261-1435e139dbc2",
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("nostrum"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListCachePolicies20200531

<p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCachePolicies20200531(ctx, operations.ListCachePolicies20200531Request{
        Marker: sdk.String("fugiat"),
        MaxItems: sdk.String("officia"),
        Type: operations.ListCachePolicies20200531TypeEnumCustom.ToPointer(),
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("iusto"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListCloudFrontOriginAccessIdentities20200531

Lists origin access identities.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCloudFrontOriginAccessIdentities20200531(ctx, operations.ListCloudFrontOriginAccessIdentities20200531Request{
        Marker: sdk.String("totam"),
        MaxItems: sdk.String("dolore"),
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListConflictingAliases20200531

<p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services accounts for each conflicting alias. In the returned list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p> <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting aliases, you provide the alias to search and the ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias. For more information, including how to set up the distribution and certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListConflictingAliases20200531(ctx, operations.ListConflictingAliases20200531Request{
        Alias: "beatae",
        DistributionID: "est",
        Marker: sdk.String("facere"),
        MaxItems: sdk.Int64(545918),
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListContinuousDeploymentPolicies20200531

<p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListContinuousDeploymentPolicies20200531(ctx, operations.ListContinuousDeploymentPolicies20200531Request{
        Marker: sdk.String("autem"),
        MaxItems: sdk.String("ipsam"),
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("officiis"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributions20200531

List CloudFront distributions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDistributions20200531(ctx, operations.ListDistributions20200531Request{
        Marker: sdk.String("alias"),
        MaxItems: sdk.String("quia"),
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("expedita"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributionsByCachePolicyId20200531

<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDistributionsByCachePolicyId20200531(ctx, operations.ListDistributionsByCachePolicyId20200531Request{
        CachePolicyID: "quibusdam",
        Marker: sdk.String("odio"),
        MaxItems: sdk.String("praesentium"),
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("recusandae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributionsByKeyGroup20200531

<p>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDistributionsByKeyGroup20200531(ctx, operations.ListDistributionsByKeyGroup20200531Request{
        KeyGroupID: "similique",
        Marker: sdk.String("ut"),
        MaxItems: sdk.String("quidem"),
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("beatae"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("fugit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributionsByOriginRequestPolicyId20200531

<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDistributionsByOriginRequestPolicyId20200531(ctx, operations.ListDistributionsByOriginRequestPolicyId20200531Request{
        Marker: sdk.String("numquam"),
        MaxItems: sdk.String("numquam"),
        OriginRequestPolicyID: "nesciunt",
        XAmzAlgorithm: sdk.String("at"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributionsByRealtimeLogConfig20200531

<p>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.</p> <p>You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDistributionsByRealtimeLogConfig20200531(ctx, operations.ListDistributionsByRealtimeLogConfig20200531Request{
        RequestBody: []byte("expedita"),
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("in"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributionsByResponseHeadersPolicyId20200531

<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDistributionsByResponseHeadersPolicyId20200531(ctx, operations.ListDistributionsByResponseHeadersPolicyId20200531Request{
        Marker: sdk.String("minus"),
        MaxItems: sdk.String("eum"),
        ResponseHeadersPolicyID: "modi",
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("aperiam"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListDistributionsByWebACLId20200531

List the distributions that are associated with a specified WAF web ACL.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDistributionsByWebACLId20200531(ctx, operations.ListDistributionsByWebACLId20200531Request{
        Marker: sdk.String("ratione"),
        MaxItems: sdk.String("labore"),
        WebACLID: "totam",
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("nostrum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListFieldLevelEncryptionConfigs20200531

List all field-level encryption configurations that have been created in CloudFront for this account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFieldLevelEncryptionConfigs20200531(ctx, operations.ListFieldLevelEncryptionConfigs20200531Request{
        Marker: sdk.String("est"),
        MaxItems: sdk.String("impedit"),
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListFieldLevelEncryptionProfiles20200531

Request a list of field-level encryption profiles that have been created in CloudFront for this account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFieldLevelEncryptionProfiles20200531(ctx, operations.ListFieldLevelEncryptionProfiles20200531Request{
        Marker: sdk.String("reprehenderit"),
        MaxItems: sdk.String("aperiam"),
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("error"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListFunctions20200531

<p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFunctions20200531(ctx, operations.ListFunctions20200531Request{
        Marker: sdk.String("veritatis"),
        MaxItems: sdk.String("ducimus"),
        Stage: operations.ListFunctions20200531StageEnumDevelopment.ToPointer(),
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("optio"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("commodi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListInvalidations20200531

Lists invalidation batches.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListInvalidations20200531(ctx, operations.ListInvalidations20200531Request{
        DistributionID: "officiis",
        Marker: sdk.String("placeat"),
        MaxItems: sdk.String("quidem"),
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListKeyGroups20200531

<p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListKeyGroups20200531(ctx, operations.ListKeyGroups20200531Request{
        Marker: sdk.String("sequi"),
        MaxItems: sdk.String("repudiandae"),
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("animi"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("nam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListOriginAccessControls20200531

<p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOriginAccessControls20200531(ctx, operations.ListOriginAccessControls20200531Request{
        Marker: sdk.String("dicta"),
        MaxItems: sdk.String("consequuntur"),
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListOriginRequestPolicies20200531

<p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListOriginRequestPolicies20200531(ctx, operations.ListOriginRequestPolicies20200531Request{
        Marker: sdk.String("laboriosam"),
        MaxItems: sdk.String("pariatur"),
        Type: operations.ListOriginRequestPolicies20200531TypeEnumCustom.ToPointer(),
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("eligendi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListPublicKeys20200531

List all public keys that have been added to CloudFront for this account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListPublicKeys20200531(ctx, operations.ListPublicKeys20200531Request{
        Marker: sdk.String("sint"),
        MaxItems: sdk.String("enim"),
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("eaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListRealtimeLogConfigs20200531

<p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRealtimeLogConfigs20200531(ctx, operations.ListRealtimeLogConfigs20200531Request{
        Marker: sdk.String("saepe"),
        MaxItems: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("doloremque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListResponseHeadersPolicies20200531

<p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListResponseHeadersPolicies20200531(ctx, operations.ListResponseHeadersPolicies20200531Request{
        Marker: sdk.String("delectus"),
        MaxItems: sdk.String("impedit"),
        Type: operations.ListResponseHeadersPolicies20200531TypeEnumCustom.ToPointer(),
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("veniam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListStreamingDistributions20200531

List streaming distributions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListStreamingDistributions20200531(ctx, operations.ListStreamingDistributions20200531Request{
        Marker: sdk.String("libero"),
        MaxItems: sdk.String("architecto"),
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("itaque"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## ListTagsForResource20200531

List tags for a CloudFront resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource20200531(ctx, operations.ListTagsForResource20200531Request{
        Resource: "sed",
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## PublishFunction20200531

<p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PublishFunction20200531(ctx, operations.PublishFunction20200531Request{
        IfMatch: "amet",
        Name: "Virginia Flatley",
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("quis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TagResource20200531

Add tags to a CloudFront resource.

### Example Usage

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
    res, err := s.SDK.TagResource20200531(ctx, operations.TagResource20200531Request{
        Operation: operations.TagResource20200531OperationEnumTag,
        RequestBody: []byte("nisi"),
        Resource: "libero",
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("facere"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestFunction20200531

<p>Tests a CloudFront function.</p> <p>To test a function, you provide an <i>event object</i> that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>To test a function, you provide the function's name and version (<code>ETag</code> value) along with the event object. To get the function's name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TestFunction20200531(ctx, operations.TestFunction20200531Request{
        IfMatch: "consequuntur",
        Name: "Marcus Prohaska",
        RequestBody: []byte("nostrum"),
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("unde"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UntagResource20200531

Remove tags from a CloudFront resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource20200531(ctx, operations.UntagResource20200531Request{
        Operation: operations.UntagResource20200531OperationEnumUntag,
        RequestBody: []byte("officiis"),
        Resource: "ducimus",
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateCachePolicy20200531

<p>Updates a cache policy configuration.</p> <p>When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:</p> <ol> <li> <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the cache policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>

### Example Usage

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
    res, err := s.SDK.UpdateCachePolicy20200531(ctx, operations.UpdateCachePolicy20200531Request{
        ID: "d525f77b-114e-4eb5-aff7-85fc37814d4c",
        IfMatch: sdk.String("provident"),
        RequestBody: []byte("laudantium"),
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("quas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateCloudFrontOriginAccessIdentity20200531

Update an origin access identity.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCloudFrontOriginAccessIdentity20200531(ctx, operations.UpdateCloudFrontOriginAccessIdentity20200531Request{
        ID: "9eb75dad-636c-4600-903d-8bb31180f739",
        IfMatch: sdk.String("dolorum"),
        RequestBody: []byte("necessitatibus"),
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateContinuousDeploymentPolicy20200531

<p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>

### Example Usage

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
    res, err := s.SDK.UpdateContinuousDeploymentPolicy20200531(ctx, operations.UpdateContinuousDeploymentPolicy20200531Request{
        ID: "809e2810-331f-4398-9d4c-700b607f3c93",
        IfMatch: sdk.String("eligendi"),
        RequestBody: []byte("dignissimos"),
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateDistribution20200531

<p>Updates the configuration for a CloudFront distribution.</p> <p>The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Use <code>GetDistributionConfig</code> to get the current configuration, including the version identifier (<code>ETag</code>).</p> </li> <li> <p>Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:</p> <ul> <li> <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>, leaving the value unchanged. (Set the value of <code>IfMatch</code> to the value of <code>ETag</code>, then remove the <code>ETag</code> field.)</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>.</p> </li> </ul> </li> <li> <p>Submit an <code>UpdateDistribution</code> request, providing the distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</p> </li> </ol>

### Example Usage

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
    res, err := s.SDK.UpdateDistribution20200531(ctx, operations.UpdateDistribution20200531Request{
        ID: "2ceda7e2-3f22-4574-91fa-f4b7544e472e",
        IfMatch: sdk.String("rem"),
        RequestBody: []byte("aperiam"),
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("libero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateDistributionWithStagingConfig20200531

<p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDistributionWithStagingConfig20200531(ctx, operations.UpdateDistributionWithStagingConfig20200531Request{
        ID: "40463a7d-575f-4140-8e76-4ad7334ec1b7",
        IfMatch: sdk.String("quas"),
        StagingDistributionID: sdk.String("et"),
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateFieldLevelEncryptionConfig20200531

Update a field-level encryption configuration.

### Example Usage

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
    res, err := s.SDK.UpdateFieldLevelEncryptionConfig20200531(ctx, operations.UpdateFieldLevelEncryptionConfig20200531Request{
        ID: "88d100ef-ada2-400e-b042-2eb2164cf9ab",
        IfMatch: sdk.String("totam"),
        RequestBody: []byte("sequi"),
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("ducimus"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateFieldLevelEncryptionProfile20200531

Update a field-level encryption profile.

### Example Usage

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
    res, err := s.SDK.UpdateFieldLevelEncryptionProfile20200531(ctx, operations.UpdateFieldLevelEncryptionProfile20200531Request{
        ID: "fda9e06b-ee48-425c-9fc0-e115c80bff91",
        IfMatch: sdk.String("quos"),
        RequestBody: []byte("ullam"),
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("assumenda"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateFunction20200531

<p>Updates a CloudFront function.</p> <p>You can update a function's code or the comment that describes the function. You cannot update a function's name.</p> <p>To update a function, you provide the function's name and version (<code>ETag</code> value) along with the updated function code. To get the name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>

### Example Usage

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
    res, err := s.SDK.UpdateFunction20200531(ctx, operations.UpdateFunction20200531Request{
        IfMatch: "vero",
        Name: "Edmund Sawayn",
        RequestBody: []byte("reiciendis"),
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("nesciunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateKeyGroup20200531

<p>Updates a key group.</p> <p>When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:</p> <ol> <li> <p>Get the current key group with <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p> </li> <li> <p>Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.</p> </li> <li> <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including the fields that you modified and those that you didn't.</p> </li> </ol>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateKeyGroup20200531(ctx, operations.UpdateKeyGroup20200531Request{
        ID: "e63562a7-b408-4f05-a3d4-8fdaf313a1f5",
        IfMatch: sdk.String("doloribus"),
        RequestBody: []byte("possimus"),
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("optio"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateOriginAccessControl20200531

Updates a CloudFront origin access control.

### Example Usage

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
    res, err := s.SDK.UpdateOriginAccessControl20200531(ctx, operations.UpdateOriginAccessControl20200531Request{
        ID: "b36f25ea-944f-43b7-96c1-1f6c37a51262",
        IfMatch: sdk.String("incidunt"),
        RequestBody: []byte("adipisci"),
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateOriginRequestPolicy20200531

<p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>

### Example Usage

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
    res, err := s.SDK.UpdateOriginRequestPolicy20200531(ctx, operations.UpdateOriginRequestPolicy20200531Request{
        ID: "5a23a45c-efc5-4fde-90a0-ce2169e51001",
        IfMatch: sdk.String("provident"),
        RequestBody: []byte("cumque"),
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdatePublicKey20200531

Update public key information. Note that the only value you can change is the comment.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePublicKey20200531(ctx, operations.UpdatePublicKey20200531Request{
        ID: "762799bf-bbe6-4949-bb2b-b4ecae6c3d5d",
        IfMatch: sdk.String("facilis"),
        RequestBody: []byte("non"),
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("facere"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateRealtimeLogConfig20200531

<p>Updates a real-time log configuration.</p> <p>When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:</p> <ol> <li> <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log configuration.</p> </li> <li> <p>Locally modify the parameters in the real-time log configuration that you want to update.</p> </li> <li> <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.</p> </li> </ol> <p>You cannot update a real-time log configuration's <code>Name</code> or <code>ARN</code>.</p>

### Example Usage

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
    res, err := s.SDK.UpdateRealtimeLogConfig20200531(ctx, operations.UpdateRealtimeLogConfig20200531Request{
        RequestBody: []byte("laborum"),
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateResponseHeadersPolicy20200531

<p>Updates a response headers policy.</p> <p>When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:</p> <ol> <li> <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's configuration.</p> </li> <li> <p>Modify the fields in the response headers policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>

### Example Usage

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
    res, err := s.SDK.UpdateResponseHeadersPolicy20200531(ctx, operations.UpdateResponseHeadersPolicy20200531Request{
        ID: "a8aa94c0-2644-4cf5-a9d9-a4578adc1ac6",
        IfMatch: sdk.String("doloremque"),
        RequestBody: []byte("voluptatem"),
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## UpdateStreamingDistribution20200531

Update a streaming distribution.

### Example Usage

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
    res, err := s.SDK.UpdateStreamingDistribution20200531(ctx, operations.UpdateStreamingDistribution20200531Request{
        ID: "c802e2ec-09ff-48f0-b816-ff3477c13e90",
        IfMatch: sdk.String("qui"),
        RequestBody: []byte("impedit"),
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("incidunt"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
