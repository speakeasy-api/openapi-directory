package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded embedded;
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct withEmbedded(SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks links;
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct withLinks(SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}