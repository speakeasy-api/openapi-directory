package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abortConfig")
    public UpdateJobRequestBodyAbortConfig abortConfig;
    public UpdateJobRequestBody withAbortConfig(UpdateJobRequestBodyAbortConfig abortConfig) {
        this.abortConfig = abortConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateJobRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobExecutionsRolloutConfig")
    public UpdateJobRequestBodyJobExecutionsRolloutConfig jobExecutionsRolloutConfig;
    public UpdateJobRequestBody withJobExecutionsRolloutConfig(UpdateJobRequestBodyJobExecutionsRolloutConfig jobExecutionsRolloutConfig) {
        this.jobExecutionsRolloutConfig = jobExecutionsRolloutConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presignedUrlConfig")
    public UpdateJobRequestBodyPresignedUrlConfig presignedUrlConfig;
    public UpdateJobRequestBody withPresignedUrlConfig(UpdateJobRequestBodyPresignedUrlConfig presignedUrlConfig) {
        this.presignedUrlConfig = presignedUrlConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeoutConfig")
    public UpdateJobRequestBodyTimeoutConfig timeoutConfig;
    public UpdateJobRequestBody withTimeoutConfig(UpdateJobRequestBodyTimeoutConfig timeoutConfig) {
        this.timeoutConfig = timeoutConfig;
        return this;
    }
}