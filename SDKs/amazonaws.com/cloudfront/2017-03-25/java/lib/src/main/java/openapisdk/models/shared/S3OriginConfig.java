package openapisdk.models.shared;



/**
 * S3OriginConfig
 * A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin, use the <code>CustomOriginConfig</code> element instead.
**/
public class S3OriginConfig {
    public String originAccessIdentity;
    public S3OriginConfig withOriginAccessIdentity(String originAccessIdentity) {
        this.originAccessIdentity = originAccessIdentity;
        return this;
    }
}