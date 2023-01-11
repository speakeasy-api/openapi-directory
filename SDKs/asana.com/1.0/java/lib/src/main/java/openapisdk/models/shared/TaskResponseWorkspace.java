package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskResponseWorkspace
 * *Create-only*. The workspace this task is associated with. Once created, task cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
public class TaskResponseWorkspace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TaskResponseWorkspace withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TaskResponseWorkspace withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TaskResponseWorkspace withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}