package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public JobDetail[] jobs;
    public DescribeJobsResponse withJobs(JobDetail[] jobs) {
        this.jobs = jobs;
        return this;
    }
}