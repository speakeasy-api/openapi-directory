package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDescribeSimulationJobRequestBody {
    @JsonProperty("jobs")
    public String[] jobs;
    public BatchDescribeSimulationJobRequestBody withJobs(String[] jobs) {
        this.jobs = jobs;
        return this;
    }
}