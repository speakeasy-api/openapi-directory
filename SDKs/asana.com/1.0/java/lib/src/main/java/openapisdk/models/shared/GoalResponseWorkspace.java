package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoalResponseWorkspace
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
public class GoalResponseWorkspace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public GoalResponseWorkspace withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoalResponseWorkspace withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public GoalResponseWorkspace withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}