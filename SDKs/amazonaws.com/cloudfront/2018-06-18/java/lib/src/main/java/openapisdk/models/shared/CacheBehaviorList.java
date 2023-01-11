package openapisdk.models.shared;



/**
 * CacheBehaviorList
 * <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to distribute objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current limit on the number of cache behaviors that you can add to a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p> <p>If you don't want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don't include an empty <code>CacheBehavior</code> element, or CloudFront returns a <code>MalformedXML</code> error.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behaviors</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
**/
public class CacheBehaviorList {
    public AllowedMethods allowedMethods;
    public CacheBehaviorList withAllowedMethods(AllowedMethods allowedMethods) {
        this.allowedMethods = allowedMethods;
        return this;
    }
    public Boolean compress;
    public CacheBehaviorList withCompress(Boolean compress) {
        this.compress = compress;
        return this;
    }
    public Long defaultTTL;
    public CacheBehaviorList withDefaultTtl(Long defaultTTL) {
        this.defaultTTL = defaultTTL;
        return this;
    }
    public String fieldLevelEncryptionId;
    public CacheBehaviorList withFieldLevelEncryptionId(String fieldLevelEncryptionId) {
        this.fieldLevelEncryptionId = fieldLevelEncryptionId;
        return this;
    }
    public ForwardedValues forwardedValues;
    public CacheBehaviorList withForwardedValues(ForwardedValues forwardedValues) {
        this.forwardedValues = forwardedValues;
        return this;
    }
    public LambdaFunctionAssociations lambdaFunctionAssociations;
    public CacheBehaviorList withLambdaFunctionAssociations(LambdaFunctionAssociations lambdaFunctionAssociations) {
        this.lambdaFunctionAssociations = lambdaFunctionAssociations;
        return this;
    }
    public Long maxTTL;
    public CacheBehaviorList withMaxTtl(Long maxTTL) {
        this.maxTTL = maxTTL;
        return this;
    }
    public Long minTTL;
    public CacheBehaviorList withMinTtl(Long minTTL) {
        this.minTTL = minTTL;
        return this;
    }
    public String pathPattern;
    public CacheBehaviorList withPathPattern(String pathPattern) {
        this.pathPattern = pathPattern;
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