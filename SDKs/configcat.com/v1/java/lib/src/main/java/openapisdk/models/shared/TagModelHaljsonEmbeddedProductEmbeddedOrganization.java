package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagModelHaljsonEmbeddedProductEmbeddedOrganization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks links;
    public TagModelHaljsonEmbeddedProductEmbeddedOrganization withLinks(TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagModelHaljsonEmbeddedProductEmbeddedOrganization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public TagModelHaljsonEmbeddedProductEmbeddedOrganization withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}