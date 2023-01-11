package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectsUpdateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public ProjectsUpdateRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProjectsUpdateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_permission")
    public ProjectsUpdateRequestBodyOrganizationPermissionEnum organizationPermission;
    public ProjectsUpdateRequestBody withOrganizationPermission(ProjectsUpdateRequestBodyOrganizationPermissionEnum organizationPermission) {
        this.organizationPermission = organizationPermission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public Boolean private_;
    public ProjectsUpdateRequestBody withPrivate(Boolean private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public ProjectsUpdateRequestBody withState(String state) {
        this.state = state;
        return this;
    }
}