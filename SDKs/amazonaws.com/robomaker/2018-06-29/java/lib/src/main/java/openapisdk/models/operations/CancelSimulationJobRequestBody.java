package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelSimulationJobRequestBody {
    @JsonProperty("job")
    public String job;
    public CancelSimulationJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}