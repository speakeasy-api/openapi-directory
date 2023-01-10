package shared

// DefaultCacheBehaviorForwardedValues
// <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html">Working with policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html">Using the managed cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> or <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html">Using the managed origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A <code>DefaultCacheBehavior</code> must include either a <code>CachePolicyId</code> or <code>ForwardedValues</code>. We recommend that you use a <code>CachePolicyId</code>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
type DefaultCacheBehaviorForwardedValues struct {
	Cookies              CookiePreference
	Headers              *Headers
	QueryString          bool
	QueryStringCacheKeys *QueryStringCacheKeys
}

// DefaultCacheBehavior
// A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
type DefaultCacheBehavior struct {
	AllowedMethods             *AllowedMethods
	CachePolicyID              *string
	Compress                   *bool
	DefaultTTL                 map[string]interface{}
	FieldLevelEncryptionID     *string
	ForwardedValues            *DefaultCacheBehaviorForwardedValues
	FunctionAssociations       *FunctionAssociations
	LambdaFunctionAssociations *LambdaFunctionAssociations
	MaxTTL                     map[string]interface{}
	MinTTL                     map[string]interface{}
	OriginRequestPolicyID      *string
	RealtimeLogConfigArn       *string
	SmoothStreaming            *bool
	TargetOriginID             string
	TrustedKeyGroups           *TrustedKeyGroups
	TrustedSigners             *TrustedSigners
	ViewerProtocolPolicy       ViewerProtocolPolicyEnum
}
