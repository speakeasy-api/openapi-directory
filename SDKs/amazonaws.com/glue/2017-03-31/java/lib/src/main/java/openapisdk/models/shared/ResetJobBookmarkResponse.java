package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResetJobBookmarkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobBookmarkEntry")
    public JobBookmarkEntry jobBookmarkEntry;
    public ResetJobBookmarkResponse withJobBookmarkEntry(JobBookmarkEntry jobBookmarkEntry) {
        this.jobBookmarkEntry = jobBookmarkEntry;
        return this;
    }
}