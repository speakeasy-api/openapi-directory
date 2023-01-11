package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks links;
    public EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization withLinks(EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}