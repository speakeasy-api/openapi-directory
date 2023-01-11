package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProductOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductViewDetail")
    public ProductViewDetail productViewDetail;
    public UpdateProductOutput withProductViewDetail(ProductViewDetail productViewDetail) {
        this.productViewDetail = productViewDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public UpdateProductOutput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}