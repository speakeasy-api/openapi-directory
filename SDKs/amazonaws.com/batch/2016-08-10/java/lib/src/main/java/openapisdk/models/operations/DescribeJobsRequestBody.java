package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeJobsRequestBody {
    @JsonProperty("jobs")
    public String[] jobs;
    public DescribeJobsRequestBody withJobs(String[] jobs) {
        this.jobs = jobs;
        return this;
    }
}