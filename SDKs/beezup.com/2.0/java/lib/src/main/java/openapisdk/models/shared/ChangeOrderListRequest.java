package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChangeOrderListRequest
 * Contains all change order operations you want to make.  (max 100 items per call)
**/
public class ChangeOrderListRequest {
    @JsonProperty("changeOrders")
    public ChangeOrderListRequestItem[] changeOrders;
    public ChangeOrderListRequest withChangeOrders(ChangeOrderListRequestItem[] changeOrders) {
        this.changeOrders = changeOrders;
        return this;
    }
}