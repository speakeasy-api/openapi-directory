package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PollForJobsOutput
 * Represents the output of a <code>PollForJobs</code> action.
**/
public class PollForJobsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public Job[] jobs;
    public PollForJobsOutput withJobs(Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
}