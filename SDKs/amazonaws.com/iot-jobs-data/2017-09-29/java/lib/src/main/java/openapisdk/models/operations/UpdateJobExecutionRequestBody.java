package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateJobExecutionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionNumber")
    public Long executionNumber;
    public UpdateJobExecutionRequestBody withExecutionNumber(Long executionNumber) {
        this.executionNumber = executionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedVersion")
    public Long expectedVersion;
    public UpdateJobExecutionRequestBody withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeJobDocument")
    public Boolean includeJobDocument;
    public UpdateJobExecutionRequestBody withIncludeJobDocument(Boolean includeJobDocument) {
        this.includeJobDocument = includeJobDocument;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeJobExecutionState")
    public Boolean includeJobExecutionState;
    public UpdateJobExecutionRequestBody withIncludeJobExecutionState(Boolean includeJobExecutionState) {
        this.includeJobExecutionState = includeJobExecutionState;
        return this;
    }
    @JsonProperty("status")
    public UpdateJobExecutionRequestBodyStatusEnum status;
    public UpdateJobExecutionRequestBody withStatus(UpdateJobExecutionRequestBodyStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusDetails")
    public java.util.Map<String, String> statusDetails;
    public UpdateJobExecutionRequestBody withStatusDetails(java.util.Map<String, String> statusDetails) {
        this.statusDetails = statusDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepTimeoutInMinutes")
    public Long stepTimeoutInMinutes;
    public UpdateJobExecutionRequestBody withStepTimeoutInMinutes(Long stepTimeoutInMinutes) {
        this.stepTimeoutInMinutes = stepTimeoutInMinutes;
        return this;
    }
}