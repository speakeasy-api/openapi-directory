package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskResponseParent
 * The parent of this task, or `null` if this is not a subtask. This property cannot be modified using a PUT request but you can change it with the `setParent` endpoint. You can create subtasks by using the subtasks endpoint.
**/
public class TaskResponseParent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TaskResponseParent withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TaskResponseParent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TaskResponseParent withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}