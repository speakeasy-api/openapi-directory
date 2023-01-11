package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeJobTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortConfig")
    public AbortConfig abortConfig;
    public DescribeJobTemplateResponse withAbortConfig(AbortConfig abortConfig) {
        this.abortConfig = abortConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public DescribeJobTemplateResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public DescribeJobTemplateResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public String document;
    public DescribeJobTemplateResponse withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentSource")
    public String documentSource;
    public DescribeJobTemplateResponse withDocumentSource(String documentSource) {
        this.documentSource = documentSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobExecutionsRolloutConfig")
    public JobExecutionsRolloutConfig jobExecutionsRolloutConfig;
    public DescribeJobTemplateResponse withJobExecutionsRolloutConfig(JobExecutionsRolloutConfig jobExecutionsRolloutConfig) {
        this.jobExecutionsRolloutConfig = jobExecutionsRolloutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTemplateArn")
    public String jobTemplateArn;
    public DescribeJobTemplateResponse withJobTemplateArn(String jobTemplateArn) {
        this.jobTemplateArn = jobTemplateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTemplateId")
    public String jobTemplateId;
    public DescribeJobTemplateResponse withJobTemplateId(String jobTemplateId) {
        this.jobTemplateId = jobTemplateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presignedUrlConfig")
    public PresignedUrlConfig presignedUrlConfig;
    public DescribeJobTemplateResponse withPresignedUrlConfig(PresignedUrlConfig presignedUrlConfig) {
        this.presignedUrlConfig = presignedUrlConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutConfig")
    public TimeoutConfig timeoutConfig;
    public DescribeJobTemplateResponse withTimeoutConfig(TimeoutConfig timeoutConfig) {
        this.timeoutConfig = timeoutConfig;
        return this;
    }
}