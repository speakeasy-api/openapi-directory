package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudFrontDistributionOriginItem
 * A complex type that describes the S3 bucket, HTTP server (for example, a web server), AWS Elemental MediaStore, or other server from which CloudFront gets your files.
**/
public class AwsCloudFrontDistributionOriginItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainName")
    public String domainName;
    public AwsCloudFrontDistributionOriginItem withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public AwsCloudFrontDistributionOriginItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OriginPath")
    public String originPath;
    public AwsCloudFrontDistributionOriginItem withOriginPath(String originPath) {
        this.originPath = originPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3OriginConfig")
    public AwsCloudFrontDistributionOriginS3OriginConfig s3OriginConfig;
    public AwsCloudFrontDistributionOriginItem withS3OriginConfig(AwsCloudFrontDistributionOriginS3OriginConfig s3OriginConfig) {
        this.s3OriginConfig = s3OriginConfig;
        return this;
    }
}