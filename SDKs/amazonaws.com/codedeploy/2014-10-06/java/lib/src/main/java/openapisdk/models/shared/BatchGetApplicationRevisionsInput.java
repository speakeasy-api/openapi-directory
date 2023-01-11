package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchGetApplicationRevisionsInput
 * Represents the input of a <code>BatchGetApplicationRevisions</code> operation.
**/
public class BatchGetApplicationRevisionsInput {
    @JsonProperty("applicationName")
    public String applicationName;
    public BatchGetApplicationRevisionsInput withApplicationName(String applicationName) {
        this.applicationName = applicationName;
        return this;
    }
    @JsonProperty("revisions")
    public RevisionLocation[] revisions;
    public BatchGetApplicationRevisionsInput withRevisions(RevisionLocation[] revisions) {
        this.revisions = revisions;
        return this;
    }
}