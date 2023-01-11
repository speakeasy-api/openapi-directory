package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3AccountPublicAccessBlockDetails
 * provides information about the Amazon S3 Public Access Block configuration for accounts.
**/
public class AwsS3AccountPublicAccessBlockDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlockPublicAcls")
    public Boolean blockPublicAcls;
    public AwsS3AccountPublicAccessBlockDetails withBlockPublicAcls(Boolean blockPublicAcls) {
        this.blockPublicAcls = blockPublicAcls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlockPublicPolicy")
    public Boolean blockPublicPolicy;
    public AwsS3AccountPublicAccessBlockDetails withBlockPublicPolicy(Boolean blockPublicPolicy) {
        this.blockPublicPolicy = blockPublicPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IgnorePublicAcls")
    public Boolean ignorePublicAcls;
    public AwsS3AccountPublicAccessBlockDetails withIgnorePublicAcls(Boolean ignorePublicAcls) {
        this.ignorePublicAcls = ignorePublicAcls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RestrictPublicBuckets")
    public Boolean restrictPublicBuckets;
    public AwsS3AccountPublicAccessBlockDetails withRestrictPublicBuckets(Boolean restrictPublicBuckets) {
        this.restrictPublicBuckets = restrictPublicBuckets;
        return this;
    }
}