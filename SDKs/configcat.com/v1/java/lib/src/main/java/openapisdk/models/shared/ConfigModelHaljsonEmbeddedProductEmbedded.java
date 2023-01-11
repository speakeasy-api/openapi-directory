package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigModelHaljsonEmbeddedProductEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public ConfigModelHaljsonEmbeddedProductEmbeddedOrganization organization;
    public ConfigModelHaljsonEmbeddedProductEmbedded withOrganization(ConfigModelHaljsonEmbeddedProductEmbeddedOrganization organization) {
        this.organization = organization;
        return this;
    }
}