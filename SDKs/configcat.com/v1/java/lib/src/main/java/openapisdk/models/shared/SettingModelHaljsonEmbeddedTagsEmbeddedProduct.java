package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SettingModelHaljsonEmbeddedTagsEmbeddedProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded embedded;
    public SettingModelHaljsonEmbeddedTagsEmbeddedProduct withEmbedded(SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks links;
    public SettingModelHaljsonEmbeddedTagsEmbeddedProduct withLinks(SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SettingModelHaljsonEmbeddedTagsEmbeddedProduct withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public SettingModelHaljsonEmbeddedTagsEmbeddedProduct withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}