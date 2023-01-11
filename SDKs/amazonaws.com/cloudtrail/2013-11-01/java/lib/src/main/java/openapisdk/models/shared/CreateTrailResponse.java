package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTrailResponse
 * Returns the objects or data listed below if successful. Otherwise, returns an error.
**/
public class CreateTrailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsLogGroupArn")
    public String cloudWatchLogsLogGroupArn;
    public CreateTrailResponse withCloudWatchLogsLogGroupArn(String cloudWatchLogsLogGroupArn) {
        this.cloudWatchLogsLogGroupArn = cloudWatchLogsLogGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsRoleArn")
    public String cloudWatchLogsRoleArn;
    public CreateTrailResponse withCloudWatchLogsRoleArn(String cloudWatchLogsRoleArn) {
        this.cloudWatchLogsRoleArn = cloudWatchLogsRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeGlobalServiceEvents")
    public Boolean includeGlobalServiceEvents;
    public CreateTrailResponse withIncludeGlobalServiceEvents(Boolean includeGlobalServiceEvents) {
        this.includeGlobalServiceEvents = includeGlobalServiceEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsMultiRegionTrail")
    public Boolean isMultiRegionTrail;
    public CreateTrailResponse withIsMultiRegionTrail(Boolean isMultiRegionTrail) {
        this.isMultiRegionTrail = isMultiRegionTrail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsOrganizationTrail")
    public Boolean isOrganizationTrail;
    public CreateTrailResponse withIsOrganizationTrail(Boolean isOrganizationTrail) {
        this.isOrganizationTrail = isOrganizationTrail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public CreateTrailResponse withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogFileValidationEnabled")
    public Boolean logFileValidationEnabled;
    public CreateTrailResponse withLogFileValidationEnabled(Boolean logFileValidationEnabled) {
        this.logFileValidationEnabled = logFileValidationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateTrailResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketName")
    public String s3BucketName;
    public CreateTrailResponse withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3KeyPrefix")
    public String s3KeyPrefix;
    public CreateTrailResponse withS3KeyPrefix(String s3KeyPrefix) {
        this.s3KeyPrefix = s3KeyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicARN")
    public String snsTopicARN;
    public CreateTrailResponse withSnsTopicArn(String snsTopicARN) {
        this.snsTopicARN = snsTopicARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicName")
    public java.util.Map<String, Object> snsTopicName;
    public CreateTrailResponse withSnsTopicName(java.util.Map<String, Object> snsTopicName) {
        this.snsTopicName = snsTopicName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrailARN")
    public String trailARN;
    public CreateTrailResponse withTrailArn(String trailARN) {
        this.trailARN = trailARN;
        return this;
    }
}