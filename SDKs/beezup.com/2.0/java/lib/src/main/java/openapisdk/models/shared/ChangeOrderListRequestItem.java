package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChangeOrderListRequestItem
 * Contains the order identifier and the change order request
**/
public class ChangeOrderListRequestItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeOrderRequest")
    public java.util.Map<String, String> changeOrderRequest;
    public ChangeOrderListRequestItem withChangeOrderRequest(java.util.Map<String, String> changeOrderRequest) {
        this.changeOrderRequest = changeOrderRequest;
        return this;
    }
    @JsonProperty("order")
    public OrderIdentifierWithETag order;
    public ChangeOrderListRequestItem withOrder(OrderIdentifierWithETag order) {
        this.order = order;
        return this;
    }
}