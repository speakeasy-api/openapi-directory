package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JobReadList {
    @JsonProperty("jobs")
    public JobWithAttemptsRead[] jobs;
    public JobReadList withJobs(JobWithAttemptsRead[] jobs) {
        this.jobs = jobs;
        return this;
    }
}