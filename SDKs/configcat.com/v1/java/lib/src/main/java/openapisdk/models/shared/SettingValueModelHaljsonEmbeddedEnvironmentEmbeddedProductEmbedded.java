package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization organization;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded withOrganization(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization organization) {
        this.organization = organization;
        return this;
    }
}