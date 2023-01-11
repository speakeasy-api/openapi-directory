package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTrailRequest
 * Specifies the settings for each trail.
**/
public class CreateTrailRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsLogGroupArn")
    public String cloudWatchLogsLogGroupArn;
    public CreateTrailRequest withCloudWatchLogsLogGroupArn(String cloudWatchLogsLogGroupArn) {
        this.cloudWatchLogsLogGroupArn = cloudWatchLogsLogGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogsRoleArn")
    public String cloudWatchLogsRoleArn;
    public CreateTrailRequest withCloudWatchLogsRoleArn(String cloudWatchLogsRoleArn) {
        this.cloudWatchLogsRoleArn = cloudWatchLogsRoleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableLogFileValidation")
    public Boolean enableLogFileValidation;
    public CreateTrailRequest withEnableLogFileValidation(Boolean enableLogFileValidation) {
        this.enableLogFileValidation = enableLogFileValidation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeGlobalServiceEvents")
    public Boolean includeGlobalServiceEvents;
    public CreateTrailRequest withIncludeGlobalServiceEvents(Boolean includeGlobalServiceEvents) {
        this.includeGlobalServiceEvents = includeGlobalServiceEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsMultiRegionTrail")
    public Boolean isMultiRegionTrail;
    public CreateTrailRequest withIsMultiRegionTrail(Boolean isMultiRegionTrail) {
        this.isMultiRegionTrail = isMultiRegionTrail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsOrganizationTrail")
    public Boolean isOrganizationTrail;
    public CreateTrailRequest withIsOrganizationTrail(Boolean isOrganizationTrail) {
        this.isOrganizationTrail = isOrganizationTrail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public CreateTrailRequest withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateTrailRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("S3BucketName")
    public String s3BucketName;
    public CreateTrailRequest withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3KeyPrefix")
    public String s3KeyPrefix;
    public CreateTrailRequest withS3KeyPrefix(String s3KeyPrefix) {
        this.s3KeyPrefix = s3KeyPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnsTopicName")
    public String snsTopicName;
    public CreateTrailRequest withSnsTopicName(String snsTopicName) {
        this.snsTopicName = snsTopicName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagsList")
    public Tag[] tagsList;
    public CreateTrailRequest withTagsList(Tag[] tagsList) {
        this.tagsList = tagsList;
        return this;
    }
}