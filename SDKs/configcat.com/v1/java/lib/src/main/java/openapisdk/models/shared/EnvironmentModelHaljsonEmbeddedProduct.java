package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnvironmentModelHaljsonEmbeddedProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public EnvironmentModelHaljsonEmbeddedProductEmbedded embedded;
    public EnvironmentModelHaljsonEmbeddedProduct withEmbedded(EnvironmentModelHaljsonEmbeddedProductEmbedded embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public EnvironmentModelHaljsonEmbeddedProductLinks links;
    public EnvironmentModelHaljsonEmbeddedProduct withLinks(EnvironmentModelHaljsonEmbeddedProductLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnvironmentModelHaljsonEmbeddedProduct withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public EnvironmentModelHaljsonEmbeddedProduct withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}