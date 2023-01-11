package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobRun")
    public JobRun jobRun;
    public GetJobRunResponse withJobRun(JobRun jobRun) {
        this.jobRun = jobRun;
        return this;
    }
}