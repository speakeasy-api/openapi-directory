package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClearMerchantOrderInfoListRequest {
    @JsonProperty("orders")
    public OrderIdentifier[] orders;
    public ClearMerchantOrderInfoListRequest withOrders(OrderIdentifier[] orders) {
        this.orders = orders;
        return this;
    }
}