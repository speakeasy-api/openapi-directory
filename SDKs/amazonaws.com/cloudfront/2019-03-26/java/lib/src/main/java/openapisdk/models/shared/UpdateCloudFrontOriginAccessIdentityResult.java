package openapisdk.models.shared;



/**
 * UpdateCloudFrontOriginAccessIdentityResult
 * The returned result of the corresponding request.
**/
public class UpdateCloudFrontOriginAccessIdentityResult {
    public CloudFrontOriginAccessIdentity cloudFrontOriginAccessIdentity;
    public UpdateCloudFrontOriginAccessIdentityResult withCloudFrontOriginAccessIdentity(CloudFrontOriginAccessIdentity cloudFrontOriginAccessIdentity) {
        this.cloudFrontOriginAccessIdentity = cloudFrontOriginAccessIdentity;
        return this;
    }
}