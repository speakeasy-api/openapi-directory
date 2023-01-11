package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateJobResponse
 * The CreateJobResponse structure.
**/
public class CreateJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Job")
    public Job job;
    public CreateJobResponse withJob(Job job) {
        this.job = job;
        return this;
    }
}