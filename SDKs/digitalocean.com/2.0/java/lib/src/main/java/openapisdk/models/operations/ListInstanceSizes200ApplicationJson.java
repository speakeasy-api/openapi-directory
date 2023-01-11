package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInstanceSizes200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discount_percent")
    public Float discountPercent;
    public ListInstanceSizes200ApplicationJson withDiscountPercent(Float discountPercent) {
        this.discountPercent = discountPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance_sizes")
    public ListInstanceSizes200ApplicationJsonInstanceSizes[] instanceSizes;
    public ListInstanceSizes200ApplicationJson withInstanceSizes(ListInstanceSizes200ApplicationJsonInstanceSizes[] instanceSizes) {
        this.instanceSizes = instanceSizes;
        return this;
    }
}