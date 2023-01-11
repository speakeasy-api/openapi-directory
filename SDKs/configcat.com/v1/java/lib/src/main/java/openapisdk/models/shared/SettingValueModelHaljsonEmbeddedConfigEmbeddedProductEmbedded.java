package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization organization;
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded withOrganization(SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization organization) {
        this.organization = organization;
        return this;
    }
}