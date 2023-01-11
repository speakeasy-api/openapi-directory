package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigModelHaljsonEmbeddedProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public ConfigModelHaljsonEmbeddedProductEmbedded embedded;
    public ConfigModelHaljsonEmbeddedProduct withEmbedded(ConfigModelHaljsonEmbeddedProductEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public ConfigModelHaljsonEmbeddedProductLinks links;
    public ConfigModelHaljsonEmbeddedProduct withLinks(ConfigModelHaljsonEmbeddedProductLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConfigModelHaljsonEmbeddedProduct withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ConfigModelHaljsonEmbeddedProduct withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}