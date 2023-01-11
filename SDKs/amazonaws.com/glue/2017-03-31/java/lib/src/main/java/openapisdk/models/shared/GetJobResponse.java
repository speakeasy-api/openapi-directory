package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Job")
    public Job job;
    public GetJobResponse withJob(Job job) {
        this.job = job;
        return this;
    }
}