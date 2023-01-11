package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TagModelHaljsonEmbedded {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("product")
    public TagModelHaljsonEmbeddedProduct product;
    public TagModelHaljsonEmbedded withProduct(TagModelHaljsonEmbeddedProduct product) {
        this.product = product;
        return this;
    }
}