package openapisdk.models.shared;



/**
 * CloudFrontOriginAccessIdentityConfig
 * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. 
**/
public class CloudFrontOriginAccessIdentityConfig {
    public String callerReference;
    public CloudFrontOriginAccessIdentityConfig withCallerReference(String callerReference) {
        this.callerReference = callerReference;
        return this;
    }
    public String comment;
    public CloudFrontOriginAccessIdentityConfig withComment(String comment) {
        this.comment = comment;
        return this;
    }
}