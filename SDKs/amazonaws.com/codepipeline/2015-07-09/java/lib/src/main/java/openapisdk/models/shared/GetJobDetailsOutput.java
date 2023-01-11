package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetJobDetailsOutput
 * Represents the output of a <code>GetJobDetails</code> action.
**/
public class GetJobDetailsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobDetails")
    public JobDetails jobDetails;
    public GetJobDetailsOutput withJobDetails(JobDetails jobDetails) {
        this.jobDetails = jobDetails;
        return this;
    }
}