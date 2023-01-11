package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackedOrders {
    @JsonProperty("orders")
    public TrackedOrder[] orders;
    public TrackedOrders withOrders(TrackedOrder[] orders) {
        this.orders = orders;
        return this;
    }
}