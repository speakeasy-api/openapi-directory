package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigModelHaljsonEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public ConfigModelHaljsonEmbeddedProduct product;
    public ConfigModelHaljsonEmbedded withProduct(ConfigModelHaljsonEmbeddedProduct product) {
        this.product = product;
        return this;
    }
}