package openapisdk.models.shared;



/**
 * TooManyCloudFrontOriginAccessIdentities
 * Processing your request would cause you to exceed the maximum number of origin access identities allowed.
**/
public class TooManyCloudFrontOriginAccessIdentities {
    public String message;
    public TooManyCloudFrontOriginAccessIdentities withMessage(String message) {
        this.message = message;
        return this;
    }
}