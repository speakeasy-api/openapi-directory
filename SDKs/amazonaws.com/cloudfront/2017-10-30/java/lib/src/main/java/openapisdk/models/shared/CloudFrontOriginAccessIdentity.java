package openapisdk.models.shared;



/**
 * CloudFrontOriginAccessIdentity
 * CloudFront origin access identity.
**/
public class CloudFrontOriginAccessIdentity {
    public CloudFrontOriginAccessIdentityConfig cloudFrontOriginAccessIdentityConfig;
    public CloudFrontOriginAccessIdentity withCloudFrontOriginAccessIdentityConfig(CloudFrontOriginAccessIdentityConfig cloudFrontOriginAccessIdentityConfig) {
        this.cloudFrontOriginAccessIdentityConfig = cloudFrontOriginAccessIdentityConfig;
        return this;
    }
    public String id;
    public CloudFrontOriginAccessIdentity withId(String id) {
        this.id = id;
        return this;
    }
    public String s3CanonicalUserId;
    public CloudFrontOriginAccessIdentity withS3CanonicalUserId(String s3CanonicalUserId) {
        this.s3CanonicalUserId = s3CanonicalUserId;
        return this;
    }
}