package openapisdk.models.shared;



/**
 * CloudFrontOriginAccessIdentitySummaryList
 * Summary of the information about a CloudFront origin access identity.
**/
public class CloudFrontOriginAccessIdentitySummaryList {
    public String comment;
    public CloudFrontOriginAccessIdentitySummaryList withComment(String comment) {
        this.comment = comment;
        return this;
    }
    public String id;
    public CloudFrontOriginAccessIdentitySummaryList withId(String id) {
        this.id = id;
        return this;
    }
    public String s3CanonicalUserId;
    public CloudFrontOriginAccessIdentitySummaryList withS3CanonicalUserId(String s3CanonicalUserId) {
        this.s3CanonicalUserId = s3CanonicalUserId;
        return this;
    }
}