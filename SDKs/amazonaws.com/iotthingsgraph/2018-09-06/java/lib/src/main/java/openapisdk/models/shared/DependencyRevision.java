package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DependencyRevision
 * An object that contains the ID and revision number of a workflow or system that is part of a deployment.
**/
public class DependencyRevision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DependencyRevision withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionNumber")
    public Long revisionNumber;
    public DependencyRevision withRevisionNumber(Long revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
}