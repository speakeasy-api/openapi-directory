package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProgressUpdateStreamSummary
 * Summary of the AWS resource used for access control that is implicitly linked to your AWS account.
**/
public class ProgressUpdateStreamSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProgressUpdateStreamName")
    public String progressUpdateStreamName;
    public ProgressUpdateStreamSummary withProgressUpdateStreamName(String progressUpdateStreamName) {
        this.progressUpdateStreamName = progressUpdateStreamName;
        return this;
    }
}