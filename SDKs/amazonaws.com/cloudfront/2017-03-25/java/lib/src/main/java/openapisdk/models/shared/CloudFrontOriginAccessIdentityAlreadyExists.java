package openapisdk.models.shared;



/**
 * CloudFrontOriginAccessIdentityAlreadyExists
 * If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. 
**/
public class CloudFrontOriginAccessIdentityAlreadyExists {
    public String message;
    public CloudFrontOriginAccessIdentityAlreadyExists withMessage(String message) {
        this.message = message;
        return this;
    }
}