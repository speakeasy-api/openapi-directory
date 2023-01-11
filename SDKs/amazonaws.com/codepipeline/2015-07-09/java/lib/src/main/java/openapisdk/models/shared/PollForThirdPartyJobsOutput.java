package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PollForThirdPartyJobsOutput
 * Represents the output of a <code>PollForThirdPartyJobs</code> action.
**/
public class PollForThirdPartyJobsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public ThirdPartyJob[] jobs;
    public PollForThirdPartyJobsOutput withJobs(ThirdPartyJob[] jobs) {
        this.jobs = jobs;
        return this;
    }
}