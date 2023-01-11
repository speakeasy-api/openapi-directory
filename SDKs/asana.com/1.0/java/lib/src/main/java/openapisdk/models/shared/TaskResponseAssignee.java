package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskResponseAssignee
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
public class TaskResponseAssignee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TaskResponseAssignee withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TaskResponseAssignee withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TaskResponseAssignee withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}