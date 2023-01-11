package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ChangeOrderListRequestV2
 * Contains all change order operations you want to make.  (max 100 items per call)
**/
public class ChangeOrderListRequestV2 {
    @JsonProperty("changeOrders")
    public ChangeOrderListRequestItemV2[] changeOrders;
    public ChangeOrderListRequestV2 withChangeOrders(ChangeOrderListRequestItemV2[] changeOrders) {
        this.changeOrders = changeOrders;
        return this;
    }
}