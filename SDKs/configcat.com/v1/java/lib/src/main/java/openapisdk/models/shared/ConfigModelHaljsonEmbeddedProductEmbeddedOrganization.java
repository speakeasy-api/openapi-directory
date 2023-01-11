package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigModelHaljsonEmbeddedProductEmbeddedOrganization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks links;
    public ConfigModelHaljsonEmbeddedProductEmbeddedOrganization withLinks(ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigModelHaljsonEmbeddedProductEmbeddedOrganization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public ConfigModelHaljsonEmbeddedProductEmbeddedOrganization withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}