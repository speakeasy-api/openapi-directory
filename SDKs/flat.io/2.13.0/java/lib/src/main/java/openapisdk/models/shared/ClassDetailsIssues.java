package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassDetailsIssues
 * Detected issues for this class
**/
public class ClassDetailsIssues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sync")
    public ClassDetailsIssuesSync[] sync;
    public ClassDetailsIssues withSync(ClassDetailsIssuesSync[] sync) {
        this.sync = sync;
        return this;
    }
}