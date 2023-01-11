package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnvironmentModelHaljsonEmbeddedProductEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization organization;
    public EnvironmentModelHaljsonEmbeddedProductEmbedded withOrganization(EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization organization) {
        this.organization = organization;
        return this;
    }
}