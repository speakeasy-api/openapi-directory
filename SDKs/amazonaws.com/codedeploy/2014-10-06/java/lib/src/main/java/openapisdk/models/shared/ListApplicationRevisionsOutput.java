package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListApplicationRevisionsOutput
 * Represents the output of a <code>ListApplicationRevisions</code> operation.
**/
public class ListApplicationRevisionsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListApplicationRevisionsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisions")
    public RevisionLocation[] revisions;
    public ListApplicationRevisionsOutput withRevisions(RevisionLocation[] revisions) {
        this.revisions = revisions;
        return this;
    }
}