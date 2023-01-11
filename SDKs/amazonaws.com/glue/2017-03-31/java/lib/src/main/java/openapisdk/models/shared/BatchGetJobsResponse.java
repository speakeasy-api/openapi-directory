package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jobs")
    public Job[] jobs;
    public BatchGetJobsResponse withJobs(Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobsNotFound")
    public String[] jobsNotFound;
    public BatchGetJobsResponse withJobsNotFound(String[] jobsNotFound) {
        this.jobsNotFound = jobsNotFound;
        return this;
    }
}