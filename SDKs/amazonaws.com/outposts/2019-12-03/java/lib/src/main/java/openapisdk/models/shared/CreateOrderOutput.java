package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOrderOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Order")
    public Order order;
    public CreateOrderOutput withOrder(Order order) {
        this.order = order;
        return this;
    }
}