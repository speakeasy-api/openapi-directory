package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DescribeLocationS3Response
 * DescribeLocationS3Response
**/
public class DescribeLocationS3Response {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgentArns")
    public String[] agentArns;
    public DescribeLocationS3Response withAgentArns(String[] agentArns) {
        this.agentArns = agentArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeLocationS3Response withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationS3Response withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationUri")
    public String locationUri;
    public DescribeLocationS3Response withLocationUri(String locationUri) {
        this.locationUri = locationUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Config")
    public S3Config s3Config;
    public DescribeLocationS3Response withS3Config(S3Config s3Config) {
        this.s3Config = s3Config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3StorageClass")
    public S3StorageClassEnum s3StorageClass;
    public DescribeLocationS3Response withS3StorageClass(S3StorageClassEnum s3StorageClass) {
        this.s3StorageClass = s3StorageClass;
        return this;
    }
}