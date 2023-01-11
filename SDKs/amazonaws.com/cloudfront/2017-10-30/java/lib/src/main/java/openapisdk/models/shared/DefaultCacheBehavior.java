package openapisdk.models.shared;



/**
 * DefaultCacheBehavior
 * A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
**/
public class DefaultCacheBehavior {
    public AllowedMethods allowedMethods;
    public DefaultCacheBehavior withAllowedMethods(AllowedMethods allowedMethods) {
        this.allowedMethods = allowedMethods;
        return this;
    }
    public Boolean compress;
    public DefaultCacheBehavior withCompress(Boolean compress) {
        this.compress = compress;
        return this;
    }
    public Long defaultTTL;
    public DefaultCacheBehavior withDefaultTtl(Long defaultTTL) {
        this.defaultTTL = defaultTTL;
        return this;
    }
    public String fieldLevelEncryptionId;
    public DefaultCacheBehavior withFieldLevelEncryptionId(String fieldLevelEncryptionId) {
        this.fieldLevelEncryptionId = fieldLevelEncryptionId;
        return this;
    }
    public ForwardedValues forwardedValues;
    public DefaultCacheBehavior withForwardedValues(ForwardedValues forwardedValues) {
        this.forwardedValues = forwardedValues;
        return this;
    }
    public LambdaFunctionAssociations lambdaFunctionAssociations;
    public DefaultCacheBehavior withLambdaFunctionAssociations(LambdaFunctionAssociations lambdaFunctionAssociations) {
        this.lambdaFunctionAssociations = lambdaFunctionAssociations;
        return this;
    }
    public Long maxTTL;
    public DefaultCacheBehavior withMaxTtl(Long maxTTL) {
        this.maxTTL = maxTTL;
        return this;
    }
    public Long minTTL;
    public DefaultCacheBehavior withMinTtl(Long minTTL) {
        this.minTTL = minTTL;
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