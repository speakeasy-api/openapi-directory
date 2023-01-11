package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobNodeDetails
 * The details of a Job node present in the workflow.
**/
public class JobNodeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobRuns")
    public JobRun[] jobRuns;
    public JobNodeDetails withJobRuns(JobRun[] jobRuns) {
        this.jobRuns = jobRuns;
        return this;
    }
}