package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobBookmarkEntry
 * Defines a point that a job can resume processing.
**/
public class JobBookmarkEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attempt")
    public Long attempt;
    public JobBookmarkEntry withAttempt(Long attempt) {
        this.attempt = attempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobBookmark")
    public String jobBookmark;
    public JobBookmarkEntry withJobBookmark(String jobBookmark) {
        this.jobBookmark = jobBookmark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobName")
    public String jobName;
    public JobBookmarkEntry withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviousRunId")
    public String previousRunId;
    public JobBookmarkEntry withPreviousRunId(String previousRunId) {
        this.previousRunId = previousRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Run")
    public Long run;
    public JobBookmarkEntry withRun(Long run) {
        this.run = run;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunId")
    public String runId;
    public JobBookmarkEntry withRunId(String runId) {
        this.runId = runId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public JobBookmarkEntry withVersion(Long version) {
        this.version = version;
        return this;
    }
}