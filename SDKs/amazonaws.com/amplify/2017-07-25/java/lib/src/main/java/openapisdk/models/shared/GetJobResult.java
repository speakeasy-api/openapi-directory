package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetJobResult {
    @JsonProperty("job")
    public Job job;
    public GetJobResult withJob(Job job) {
        this.job = job;
        return this;
    }
}