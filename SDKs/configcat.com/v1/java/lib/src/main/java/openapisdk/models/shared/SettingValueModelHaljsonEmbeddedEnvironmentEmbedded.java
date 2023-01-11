package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedEnvironmentEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct product;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbedded withProduct(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct product) {
        this.product = product;
        return this;
    }
}