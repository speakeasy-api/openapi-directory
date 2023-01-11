package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProgressUpdateStreamRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DryRun")
    public Boolean dryRun;
    public CreateProgressUpdateStreamRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @JsonProperty("ProgressUpdateStreamName")
    public String progressUpdateStreamName;
    public CreateProgressUpdateStreamRequest withProgressUpdateStreamName(String progressUpdateStreamName) {
        this.progressUpdateStreamName = progressUpdateStreamName;
        return this;
    }
}