package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainDescriptionType
 * A container for information about a domain.
**/
public class DomainDescriptionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AWSAccountId")
    public String awsAccountId;
    public DomainDescriptionType withAwsAccountId(String awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudFrontDistribution")
    public String cloudFrontDistribution;
    public DomainDescriptionType withCloudFrontDistribution(String cloudFrontDistribution) {
        this.cloudFrontDistribution = cloudFrontDistribution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomDomainConfig")
    public CustomDomainConfigType customDomainConfig;
    public DomainDescriptionType withCustomDomainConfig(CustomDomainConfigType customDomainConfig) {
        this.customDomainConfig = customDomainConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public String domain;
    public DomainDescriptionType withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public DomainDescriptionType withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public DomainStatusTypeEnum status;
    public DomainDescriptionType withStatus(DomainStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DomainDescriptionType withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public DomainDescriptionType withVersion(String version) {
        this.version = version;
        return this;
    }
}