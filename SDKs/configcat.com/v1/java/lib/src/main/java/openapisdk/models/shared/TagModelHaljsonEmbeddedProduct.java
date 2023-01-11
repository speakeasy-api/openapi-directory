package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagModelHaljsonEmbeddedProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public TagModelHaljsonEmbeddedProductEmbedded embedded;
    public TagModelHaljsonEmbeddedProduct withEmbedded(TagModelHaljsonEmbeddedProductEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public TagModelHaljsonEmbeddedProductLinks links;
    public TagModelHaljsonEmbeddedProduct withLinks(TagModelHaljsonEmbeddedProductLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TagModelHaljsonEmbeddedProduct withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public TagModelHaljsonEmbeddedProduct withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}