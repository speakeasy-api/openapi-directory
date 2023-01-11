package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopJobResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public Job job;
    public StopJobResult withJob(Job job) {
        this.job = job;
        return this;
    }
}