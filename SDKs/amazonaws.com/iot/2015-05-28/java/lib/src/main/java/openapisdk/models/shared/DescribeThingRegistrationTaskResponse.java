package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeThingRegistrationTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public DescribeThingRegistrationTaskResponse withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureCount")
    public Long failureCount;
    public DescribeThingRegistrationTaskResponse withFailureCount(Long failureCount) {
        this.failureCount = failureCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputFileBucket")
    public String inputFileBucket;
    public DescribeThingRegistrationTaskResponse withInputFileBucket(String inputFileBucket) {
        this.inputFileBucket = inputFileBucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputFileKey")
    public String inputFileKey;
    public DescribeThingRegistrationTaskResponse withInputFileKey(String inputFileKey) {
        this.inputFileKey = inputFileKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public DescribeThingRegistrationTaskResponse withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DescribeThingRegistrationTaskResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentageProgress")
    public Long percentageProgress;
    public DescribeThingRegistrationTaskResponse withPercentageProgress(Long percentageProgress) {
        this.percentageProgress = percentageProgress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public DescribeThingRegistrationTaskResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StatusEnum status;
    public DescribeThingRegistrationTaskResponse withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successCount")
    public Long successCount;
    public DescribeThingRegistrationTaskResponse withSuccessCount(Long successCount) {
        this.successCount = successCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public DescribeThingRegistrationTaskResponse withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateBody")
    public String templateBody;
    public DescribeThingRegistrationTaskResponse withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
}