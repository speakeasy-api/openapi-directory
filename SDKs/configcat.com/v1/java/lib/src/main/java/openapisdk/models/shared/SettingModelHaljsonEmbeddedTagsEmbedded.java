package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingModelHaljsonEmbeddedTagsEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public SettingModelHaljsonEmbeddedTagsEmbeddedProduct product;
    public SettingModelHaljsonEmbeddedTagsEmbedded withProduct(SettingModelHaljsonEmbeddedTagsEmbeddedProduct product) {
        this.product = product;
        return this;
    }
}