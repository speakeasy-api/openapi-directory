package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrganizationModelHaljson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public OrganizationModelHaljsonLinks links;
    public OrganizationModelHaljson withLinks(OrganizationModelHaljsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OrganizationModelHaljson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public OrganizationModelHaljson withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}