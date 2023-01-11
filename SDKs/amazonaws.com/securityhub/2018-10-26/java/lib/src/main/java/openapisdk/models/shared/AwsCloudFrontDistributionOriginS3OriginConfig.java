package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionOriginS3OriginConfig
 * Information about an origin that is an S3 bucket that is not configured with static website hosting.
**/
public class AwsCloudFrontDistributionOriginS3OriginConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginAccessIdentity")
    public String originAccessIdentity;
    public AwsCloudFrontDistributionOriginS3OriginConfig withOriginAccessIdentity(String originAccessIdentity) {
        this.originAccessIdentity = originAccessIdentity;
        return this;
    }
}