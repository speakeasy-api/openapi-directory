package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortConfig")
    public CreateJobRequestBodyAbortConfig abortConfig;
    public CreateJobRequestBody withAbortConfig(CreateJobRequestBodyAbortConfig abortConfig) {
        this.abortConfig = abortConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateJobRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document")
    public String document;
    public CreateJobRequestBody withDocument(String document) {
        this.document = document;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentSource")
    public String documentSource;
    public CreateJobRequestBody withDocumentSource(String documentSource) {
        this.documentSource = documentSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobExecutionsRolloutConfig")
    public CreateJobRequestBodyJobExecutionsRolloutConfig jobExecutionsRolloutConfig;
    public CreateJobRequestBody withJobExecutionsRolloutConfig(CreateJobRequestBodyJobExecutionsRolloutConfig jobExecutionsRolloutConfig) {
        this.jobExecutionsRolloutConfig = jobExecutionsRolloutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobTemplateArn")
    public String jobTemplateArn;
    public CreateJobRequestBody withJobTemplateArn(String jobTemplateArn) {
        this.jobTemplateArn = jobTemplateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaceId")
    public String namespaceId;
    public CreateJobRequestBody withNamespaceId(String namespaceId) {
        this.namespaceId = namespaceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presignedUrlConfig")
    public CreateJobRequestBodyPresignedUrlConfig presignedUrlConfig;
    public CreateJobRequestBody withPresignedUrlConfig(CreateJobRequestBodyPresignedUrlConfig presignedUrlConfig) {
        this.presignedUrlConfig = presignedUrlConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateJobRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSelection")
    public CreateJobRequestBodyTargetSelectionEnum targetSelection;
    public CreateJobRequestBody withTargetSelection(CreateJobRequestBodyTargetSelectionEnum targetSelection) {
        this.targetSelection = targetSelection;
        return this;
    }
    @JsonProperty("targets")
    public String[] targets;
    public CreateJobRequestBody withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutConfig")
    public CreateJobRequestBodyTimeoutConfig timeoutConfig;
    public CreateJobRequestBody withTimeoutConfig(CreateJobRequestBodyTimeoutConfig timeoutConfig) {
        this.timeoutConfig = timeoutConfig;
        return this;
    }
}