package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkspaceResponse
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
public class WorkspaceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email_domains")
    public String[] emailDomains;
    public WorkspaceResponse withEmailDomains(String[] emailDomains) {
        this.emailDomains = emailDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public WorkspaceResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_organization")
    public Boolean isOrganization;
    public WorkspaceResponse withIsOrganization(Boolean isOrganization) {
        this.isOrganization = isOrganization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WorkspaceResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public WorkspaceResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}