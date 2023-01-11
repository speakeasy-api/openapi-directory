package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks links;
    public SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization withLinks(SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}