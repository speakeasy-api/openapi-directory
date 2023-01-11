package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodegroupHealth
 * An object representing the health status of the node group.
**/
public class NodegroupHealth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public Issue[] issues;
    public NodegroupHealth withIssues(Issue[] issues) {
        this.issues = issues;
        return this;
    }
}