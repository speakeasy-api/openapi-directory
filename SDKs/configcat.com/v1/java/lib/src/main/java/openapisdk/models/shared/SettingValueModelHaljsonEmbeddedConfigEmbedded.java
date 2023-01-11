package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedConfigEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct product;
    public SettingValueModelHaljsonEmbeddedConfigEmbedded withProduct(SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct product) {
        this.product = product;
        return this;
    }
}