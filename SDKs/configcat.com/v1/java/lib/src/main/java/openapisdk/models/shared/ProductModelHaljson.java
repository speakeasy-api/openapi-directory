package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProductModelHaljson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public ProductModelHaljsonEmbedded embedded;
    public ProductModelHaljson withEmbedded(ProductModelHaljsonEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public ProductModelHaljsonLinks links;
    public ProductModelHaljson withLinks(ProductModelHaljsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProductModelHaljson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public ProductModelHaljson withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}