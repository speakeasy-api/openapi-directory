package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReadJobResponse
 * The <code>ReadJobResponse</code> structure.
**/
public class ReadJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Job")
    public Job job;
    public ReadJobResponse withJob(Job job) {
        this.job = job;
        return this;
    }
}