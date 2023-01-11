package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamResponse
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
public class TeamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TeamResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TeamResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_description")
    public String htmlDescription;
    public TeamResponse withHtmlDescription(String htmlDescription) {
        this.htmlDescription = htmlDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TeamResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public TeamResponseOrganization organization;
    public TeamResponse withOrganization(TeamResponseOrganization organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permalink_url")
    public String permalinkUrl;
    public TeamResponse withPermalinkUrl(String permalinkUrl) {
        this.permalinkUrl = permalinkUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TeamResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}