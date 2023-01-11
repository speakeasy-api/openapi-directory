package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetJobDetailsInput
 * Represents the input of a <code>GetJobDetails</code> action.
**/
public class GetJobDetailsInput {
    @JsonProperty("jobId")
    public String jobId;
    public GetJobDetailsInput withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}