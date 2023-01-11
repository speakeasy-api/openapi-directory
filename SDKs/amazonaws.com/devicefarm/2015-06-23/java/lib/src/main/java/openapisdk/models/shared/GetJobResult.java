package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetJobResult
 * Represents the result of a get job request.
**/
public class GetJobResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public Job job;
    public GetJobResult withJob(Job job) {
        this.job = job;
        return this;
    }
}