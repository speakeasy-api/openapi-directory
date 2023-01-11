package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectResponseWorkspace
 * *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
public class ProjectResponseWorkspace {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public ProjectResponseWorkspace withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProjectResponseWorkspace withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public ProjectResponseWorkspace withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}