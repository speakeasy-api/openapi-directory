package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSimulationJobRequestBody {
    @JsonProperty("job")
    public String job;
    public DescribeSimulationJobRequestBody withJob(String job) {
        this.job = job;
        return this;
    }
}