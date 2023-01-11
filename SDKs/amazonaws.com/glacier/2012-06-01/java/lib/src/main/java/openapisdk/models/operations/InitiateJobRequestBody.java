package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InitiateJobRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobParameters")
    public InitiateJobRequestBodyJobParameters jobParameters;
    public InitiateJobRequestBody withJobParameters(InitiateJobRequestBodyJobParameters jobParameters) {
        this.jobParameters = jobParameters;
        return this;
    }
}