package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserTaskListResponseOwner
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
public class UserTaskListResponseOwner {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public UserTaskListResponseOwner withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserTaskListResponseOwner withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public UserTaskListResponseOwner withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}