package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TrackedExternalOrders {
    @JsonProperty("externalOrders")
    public TrackedExternalOrder[] externalOrders;
    public TrackedExternalOrders withExternalOrders(TrackedExternalOrder[] externalOrders) {
        this.externalOrders = externalOrders;
        return this;
    }
}