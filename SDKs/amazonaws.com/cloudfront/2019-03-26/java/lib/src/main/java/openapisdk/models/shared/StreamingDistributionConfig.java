package openapisdk.models.shared;



/**
 * StreamingDistributionConfig
 * The RTMP distribution's configuration information.
**/
public class StreamingDistributionConfig {
    public Aliases aliases;
    public StreamingDistributionConfig withAliases(Aliases aliases) {
        this.aliases = aliases;
        return this;
    }
    public String callerReference;
    public StreamingDistributionConfig withCallerReference(String callerReference) {
        this.callerReference = callerReference;
        return this;
    }
    public String comment;
    public StreamingDistributionConfig withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public Boolean enabled;
    public StreamingDistributionConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public StreamingLoggingConfig logging;
    public StreamingDistributionConfig withLogging(StreamingLoggingConfig logging) {
        this.logging = logging;
        return this;
    }
    public PriceClassEnum priceClass;
    public StreamingDistributionConfig withPriceClass(PriceClassEnum priceClass) {
        this.priceClass = priceClass;
        return this;
    }
    public S3Origin s3Origin;
    public StreamingDistributionConfig withS3Origin(S3Origin s3Origin) {
        this.s3Origin = s3Origin;
        return this;
    }
    public TrustedSigners trustedSigners;
    public StreamingDistributionConfig withTrustedSigners(TrustedSigners trustedSigners) {
        this.trustedSigners = trustedSigners;
        return this;
    }
}