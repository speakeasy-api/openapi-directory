package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangeOrderListRequestItemV2
 * Contains the order identifier and the change order request
**/
public class ChangeOrderListRequestItemV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeOrderRequest")
    public java.util.Map<String, String> changeOrderRequest;
    public ChangeOrderListRequestItemV2 withChangeOrderRequest(java.util.Map<String, String> changeOrderRequest) {
        this.changeOrderRequest = changeOrderRequest;
        return this;
    }
    @JsonProperty("order")
    public OrderIdentifier order;
    public ChangeOrderListRequestItemV2 withOrder(OrderIdentifier order) {
        this.order = order;
        return this;
    }
}