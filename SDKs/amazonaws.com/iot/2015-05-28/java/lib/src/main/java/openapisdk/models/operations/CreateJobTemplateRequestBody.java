package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateJobTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortConfig")
    public CreateJobTemplateRequestBodyAbortConfig abortConfig;
    public CreateJobTemplateRequestBody withAbortConfig(CreateJobTemplateRequestBodyAbortConfig abortConfig) {
        this.abortConfig = abortConfig;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public CreateJobTemplateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public String document;
    public CreateJobTemplateRequestBody withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentSource")
    public String documentSource;
    public CreateJobTemplateRequestBody withDocumentSource(String documentSource) {
        this.documentSource = documentSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobArn")
    public String jobArn;
    public CreateJobTemplateRequestBody withJobArn(String jobArn) {
        this.jobArn = jobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobExecutionsRolloutConfig")
    public CreateJobTemplateRequestBodyJobExecutionsRolloutConfig jobExecutionsRolloutConfig;
    public CreateJobTemplateRequestBody withJobExecutionsRolloutConfig(CreateJobTemplateRequestBodyJobExecutionsRolloutConfig jobExecutionsRolloutConfig) {
        this.jobExecutionsRolloutConfig = jobExecutionsRolloutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presignedUrlConfig")
    public CreateJobTemplateRequestBodyPresignedUrlConfig presignedUrlConfig;
    public CreateJobTemplateRequestBody withPresignedUrlConfig(CreateJobTemplateRequestBodyPresignedUrlConfig presignedUrlConfig) {
        this.presignedUrlConfig = presignedUrlConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateJobTemplateRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutConfig")
    public CreateJobTemplateRequestBodyTimeoutConfig timeoutConfig;
    public CreateJobTemplateRequestBody withTimeoutConfig(CreateJobTemplateRequestBodyTimeoutConfig timeoutConfig) {
        this.timeoutConfig = timeoutConfig;
        return this;
    }
}