package openapisdk.models.shared;



/**
 * CreateCloudFrontOriginAccessIdentityResult
 * The returned result of the corresponding request.
**/
public class CreateCloudFrontOriginAccessIdentityResult {
    public CloudFrontOriginAccessIdentity cloudFrontOriginAccessIdentity;
    public CreateCloudFrontOriginAccessIdentityResult withCloudFrontOriginAccessIdentity(CloudFrontOriginAccessIdentity cloudFrontOriginAccessIdentity) {
        this.cloudFrontOriginAccessIdentity = cloudFrontOriginAccessIdentity;
        return this;
    }
}