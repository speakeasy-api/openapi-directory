package openapisdk.models.shared;



/**
 * DefaultCacheBehavior
 * A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
**/
public class DefaultCacheBehavior {
    public AllowedMethods allowedMethods;
    public DefaultCacheBehavior withAllowedMethods(AllowedMethods allowedMethods) {
        this.allowedMethods = allowedMethods;
        return this;
    }
    public String cachePolicyId;
    public DefaultCacheBehavior withCachePolicyId(String cachePolicyId) {
        this.cachePolicyId = cachePolicyId;
        return this;
    }
    public Boolean compress;
    public DefaultCacheBehavior withCompress(Boolean compress) {
        this.compress = compress;
        return this;
    }
    public java.util.Map<String, Object> defaultTTL;
    public DefaultCacheBehavior withDefaultTtl(java.util.Map<String, Object> defaultTTL) {
        this.defaultTTL = defaultTTL;
        return this;
    }
    public String fieldLevelEncryptionId;
    public DefaultCacheBehavior withFieldLevelEncryptionId(String fieldLevelEncryptionId) {
        this.fieldLevelEncryptionId = fieldLevelEncryptionId;
        return this;
    }
    public DefaultCacheBehaviorForwardedValues forwardedValues;
    public DefaultCacheBehavior withForwardedValues(DefaultCacheBehaviorForwardedValues forwardedValues) {
        this.forwardedValues = forwardedValues;
        return this;
    }
    public FunctionAssociations functionAssociations;
    public DefaultCacheBehavior withFunctionAssociations(FunctionAssociations functionAssociations) {
        this.functionAssociations = functionAssociations;
        return this;
    }
    public LambdaFunctionAssociations lambdaFunctionAssociations;
    public DefaultCacheBehavior withLambdaFunctionAssociations(LambdaFunctionAssociations lambdaFunctionAssociations) {
        this.lambdaFunctionAssociations = lambdaFunctionAssociations;
        return this;
    }
    public java.util.Map<String, Object> maxTTL;
    public DefaultCacheBehavior withMaxTtl(java.util.Map<String, Object> maxTTL) {
        this.maxTTL = maxTTL;
        return this;
    }
    public java.util.Map<String, Object> minTTL;
    public DefaultCacheBehavior withMinTtl(java.util.Map<String, Object> minTTL) {
        this.minTTL = minTTL;
        return this;
    }
    public String originRequestPolicyId;
    public DefaultCacheBehavior withOriginRequestPolicyId(String originRequestPolicyId) {
        this.originRequestPolicyId = originRequestPolicyId;
        return this;
    }
    public String realtimeLogConfigArn;
    public DefaultCacheBehavior withRealtimeLogConfigArn(String realtimeLogConfigArn) {
        this.realtimeLogConfigArn = realtimeLogConfigArn;
        return this;
    }
    public Boolean smoothStreaming;
    public DefaultCacheBehavior withSmoothStreaming(Boolean smoothStreaming) {
        this.smoothStreaming = smoothStreaming;
        return this;
    }
    public String targetOriginId;
    public DefaultCacheBehavior withTargetOriginId(String targetOriginId) {
        this.targetOriginId = targetOriginId;
        return this;
    }
    public TrustedKeyGroups trustedKeyGroups;
    public DefaultCacheBehavior withTrustedKeyGroups(TrustedKeyGroups trustedKeyGroups) {
        this.trustedKeyGroups = trustedKeyGroups;
        return this;
    }
    public TrustedSigners trustedSigners;
    public DefaultCacheBehavior withTrustedSigners(TrustedSigners trustedSigners) {
        this.trustedSigners = trustedSigners;
        return this;
    }
    public ViewerProtocolPolicyEnum viewerProtocolPolicy;
    public DefaultCacheBehavior withViewerProtocolPolicy(ViewerProtocolPolicyEnum viewerProtocolPolicy) {
        this.viewerProtocolPolicy = viewerProtocolPolicy;
        return this;
    }
}