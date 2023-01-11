package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded embedded;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct withEmbedded(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks links;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct withLinks(SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}