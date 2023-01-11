package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestartSimulationJobRequestBody {
    @JsonProperty("job")
    public String job;
    public RestartSimulationJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}