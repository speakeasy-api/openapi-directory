package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks links;
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization withLinks(SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}