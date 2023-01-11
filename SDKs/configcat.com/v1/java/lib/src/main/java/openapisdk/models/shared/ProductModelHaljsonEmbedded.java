package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductModelHaljsonEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public ProductModelHaljsonEmbeddedOrganization organization;
    public ProductModelHaljsonEmbedded withOrganization(ProductModelHaljsonEmbeddedOrganization organization) {
        this.organization = organization;
        return this;
    }
}