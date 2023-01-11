package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLocationS3Request
 * CreateLocationS3Request
**/
public class CreateLocationS3Request {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentArns")
    public String[] agentArns;
    public CreateLocationS3Request withAgentArns(String[] agentArns) {
        this.agentArns = agentArns;
        return this;
    }
    @JsonProperty("S3BucketArn")
    public String s3BucketArn;
    public CreateLocationS3Request withS3BucketArn(String s3BucketArn) {
        this.s3BucketArn = s3BucketArn;
        return this;
    }
    @JsonProperty("S3Config")
    public S3Config s3Config;
    public CreateLocationS3Request withS3Config(S3Config s3Config) {
        this.s3Config = s3Config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3StorageClass")
    public S3StorageClassEnum s3StorageClass;
    public CreateLocationS3Request withS3StorageClass(S3StorageClassEnum s3StorageClass) {
        this.s3StorageClass = s3StorageClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subdirectory")
    public String subdirectory;
    public CreateLocationS3Request withSubdirectory(String subdirectory) {
        this.subdirectory = subdirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public TagListEntry[] tags;
    public CreateLocationS3Request withTags(TagListEntry[] tags) {
        this.tags = tags;
        return this;
    }
}