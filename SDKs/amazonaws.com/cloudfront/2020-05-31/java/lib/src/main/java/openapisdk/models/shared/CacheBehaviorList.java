package openapisdk.models.shared;



/**
 * CacheBehaviorList
 * <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don’t want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don’t include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
**/
public class CacheBehaviorList {
    public AllowedMethods allowedMethods;
    public CacheBehaviorList withAllowedMethods(AllowedMethods allowedMethods) {
        this.allowedMethods = allowedMethods;
        return this;
    }
    public String cachePolicyId;
    public CacheBehaviorList withCachePolicyId(String cachePolicyId) {
        this.cachePolicyId = cachePolicyId;
        return this;
    }
    public Boolean compress;
    public CacheBehaviorList withCompress(Boolean compress) {
        this.compress = compress;
        return this;
    }
    public java.util.Map<String, Object> defaultTTL;
    public CacheBehaviorList withDefaultTtl(java.util.Map<String, Object> defaultTTL) {
        this.defaultTTL = defaultTTL;
        return this;
    }
    public String fieldLevelEncryptionId;
    public CacheBehaviorList withFieldLevelEncryptionId(String fieldLevelEncryptionId) {
        this.fieldLevelEncryptionId = fieldLevelEncryptionId;
        return this;
    }
    public CacheBehaviorListForwardedValues forwardedValues;
    public CacheBehaviorList withForwardedValues(CacheBehaviorListForwardedValues forwardedValues) {
        this.forwardedValues = forwardedValues;
        return this;
    }
    public FunctionAssociations functionAssociations;
    public CacheBehaviorList withFunctionAssociations(FunctionAssociations functionAssociations) {
        this.functionAssociations = functionAssociations;
        return this;
    }
    public LambdaFunctionAssociations lambdaFunctionAssociations;
    public CacheBehaviorList withLambdaFunctionAssociations(LambdaFunctionAssociations lambdaFunctionAssociations) {
        this.lambdaFunctionAssociations = lambdaFunctionAssociations;
        return this;
    }
    public java.util.Map<String, Object> maxTTL;
    public CacheBehaviorList withMaxTtl(java.util.Map<String, Object> maxTTL) {
        this.maxTTL = maxTTL;
        return this;
    }
    public java.util.Map<String, Object> minTTL;
    public CacheBehaviorList withMinTtl(java.util.Map<String, Object> minTTL) {
        this.minTTL = minTTL;
        return this;
    }
    public String originRequestPolicyId;
    public CacheBehaviorList withOriginRequestPolicyId(String originRequestPolicyId) {
        this.originRequestPolicyId = originRequestPolicyId;
        return this;
    }
    public String pathPattern;
    public CacheBehaviorList withPathPattern(String pathPattern) {
        this.pathPattern = pathPattern;
        return this;
    }
    public String realtimeLogConfigArn;
    public CacheBehaviorList withRealtimeLogConfigArn(String realtimeLogConfigArn) {
        this.realtimeLogConfigArn = realtimeLogConfigArn;
        return this;
    }
    public Boolean smoothStreaming;
    public CacheBehaviorList withSmoothStreaming(Boolean smoothStreaming) {
        this.smoothStreaming = smoothStreaming;
        return this;
    }
    public String targetOriginId;
    public CacheBehaviorList withTargetOriginId(String targetOriginId) {
        this.targetOriginId = targetOriginId;
        return this;
    }
    public TrustedKeyGroups trustedKeyGroups;
    public CacheBehaviorList withTrustedKeyGroups(TrustedKeyGroups trustedKeyGroups) {
        this.trustedKeyGroups = trustedKeyGroups;
        return this;
    }
    public TrustedSigners trustedSigners;
    public CacheBehaviorList withTrustedSigners(TrustedSigners trustedSigners) {
        this.trustedSigners = trustedSigners;
        return this;
    }
    public ViewerProtocolPolicyEnum viewerProtocolPolicy;
    public CacheBehaviorList withViewerProtocolPolicy(ViewerProtocolPolicyEnum viewerProtocolPolicy) {
        this.viewerProtocolPolicy = viewerProtocolPolicy;
        return this;
    }
}