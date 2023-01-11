package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDescribeSimulationJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public SimulationJob[] jobs;
    public BatchDescribeSimulationJobResponse withJobs(SimulationJob[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unprocessedJobs")
    public String[] unprocessedJobs;
    public BatchDescribeSimulationJobResponse withUnprocessedJobs(String[] unprocessedJobs) {
        this.unprocessedJobs = unprocessedJobs;
        return this;
    }
}