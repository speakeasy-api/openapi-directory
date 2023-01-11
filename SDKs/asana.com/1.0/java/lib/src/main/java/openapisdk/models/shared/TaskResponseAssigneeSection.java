package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskResponseAssigneeSection
 * The *assignee section* is a subdivision of a project that groups tasks together in the assignee's "My Tasks" list. It can either be a header above a list of tasks in a list view or a column in a board view of "My Tasks."
 * The `assignee_section` property will be returned in the response only if the request was sent by the user who is the assignee of the task. Note that you can only write to `assignee_section` with the gid of an existing section visible in the user's "My Tasks" list.
**/
public class TaskResponseAssigneeSection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TaskResponseAssigneeSection withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TaskResponseAssigneeSection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TaskResponseAssigneeSection withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}