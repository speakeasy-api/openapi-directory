package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnvironmentModelHaljsonEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public EnvironmentModelHaljsonEmbeddedProduct product;
    public EnvironmentModelHaljsonEmbedded withProduct(EnvironmentModelHaljsonEmbeddedProduct product) {
        this.product = product;
        return this;
    }
}