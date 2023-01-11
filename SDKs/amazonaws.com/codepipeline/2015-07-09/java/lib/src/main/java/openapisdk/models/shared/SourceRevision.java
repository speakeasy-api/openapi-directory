package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceRevision
 * Information about the version (or revision) of a source artifact that initiated a pipeline execution.
**/
public class SourceRevision {
    @JsonProperty("actionName")
    public String actionName;
    public SourceRevision withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public SourceRevision withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionSummary")
    public String revisionSummary;
    public SourceRevision withRevisionSummary(String revisionSummary) {
        this.revisionSummary = revisionSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionUrl")
    public String revisionUrl;
    public SourceRevision withRevisionUrl(String revisionUrl) {
        this.revisionUrl = revisionUrl;
        return this;
    }
}