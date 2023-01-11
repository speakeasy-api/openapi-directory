package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobBookmarkRequest {
    @JsonProperty("JobName")
    public String jobName;
    public GetJobBookmarkRequest withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunId")
    public String runId;
    public GetJobBookmarkRequest withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}