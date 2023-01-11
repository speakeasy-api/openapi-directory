import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CookiePreference } from "./cookiepreference";
import { Headers } from "./headers";
import { QueryStringCacheKeys } from "./querystringcachekeys";
import { AllowedMethods } from "./allowedmethods";
import { FunctionAssociations } from "./functionassociations";
import { LambdaFunctionAssociations } from "./lambdafunctionassociations";
import { TrustedKeyGroups } from "./trustedkeygroups";
import { TrustedSigners } from "./trustedsigners";
import { ViewerProtocolPolicyEnum } from "./viewerprotocolpolicyenum";



// CacheBehaviorListForwardedValues
/** 
 * <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>CacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
**/
export class CacheBehaviorListForwardedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cookies: CookiePreference;

  @SpeakeasyMetadata()
  headers?: Headers;

  @SpeakeasyMetadata()
  queryString: boolean;

  @SpeakeasyMetadata()
  queryStringCacheKeys?: QueryStringCacheKeys;
}


// CacheBehaviorList
/** 
 * <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don’t want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don’t include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
**/
export class CacheBehaviorList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedMethods?: AllowedMethods;

  @SpeakeasyMetadata()
  cachePolicyId?: string;

  @SpeakeasyMetadata()
  compress?: boolean;

  @SpeakeasyMetadata()
  defaultTTL?: Record<string, any>;

  @SpeakeasyMetadata()
  fieldLevelEncryptionId?: string;

  @SpeakeasyMetadata()
  forwardedValues?: CacheBehaviorListForwardedValues;

  @SpeakeasyMetadata()
  functionAssociations?: FunctionAssociations;

  @SpeakeasyMetadata()
  lambdaFunctionAssociations?: LambdaFunctionAssociations;

  @SpeakeasyMetadata()
  maxTTL?: Record<string, any>;

  @SpeakeasyMetadata()
  minTTL?: Record<string, any>;

  @SpeakeasyMetadata()
  originRequestPolicyId?: string;

  @SpeakeasyMetadata()
  pathPattern: string;

  @SpeakeasyMetadata()
  realtimeLogConfigArn?: string;

  @SpeakeasyMetadata()
  smoothStreaming?: boolean;

  @SpeakeasyMetadata()
  targetOriginId: string;

  @SpeakeasyMetadata()
  trustedKeyGroups?: TrustedKeyGroups;

  @SpeakeasyMetadata()
  trustedSigners?: TrustedSigners;

  @SpeakeasyMetadata()
  viewerProtocolPolicy: ViewerProtocolPolicyEnum;
}
