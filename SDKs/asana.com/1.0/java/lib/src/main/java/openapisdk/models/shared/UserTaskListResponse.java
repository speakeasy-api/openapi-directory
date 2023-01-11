package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserTaskListResponse
 * A user task list represents the tasks assigned to a particular user. It provides API access to a user’s “My Tasks” view in Asana.
**/
public class UserTaskListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public UserTaskListResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserTaskListResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public UserTaskListResponseOwner owner;
    public UserTaskListResponse withOwner(UserTaskListResponseOwner owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public UserTaskListResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public UserTaskListResponseWorkspace workspace;
    public UserTaskListResponse withWorkspace(UserTaskListResponseWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}