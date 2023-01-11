package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamResponseOrganization
 * The organization/workspace the team belongs to.
 * 
**/
public class TeamResponseOrganization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TeamResponseOrganization withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamResponseOrganization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TeamResponseOrganization withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}