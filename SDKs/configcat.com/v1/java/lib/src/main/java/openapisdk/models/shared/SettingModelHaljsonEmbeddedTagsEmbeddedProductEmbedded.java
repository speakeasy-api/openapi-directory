package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization organization;
    public SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded withOrganization(SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization organization) {
        this.organization = organization;
        return this;
    }
}