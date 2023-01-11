package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderFulfillments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OrderFulfillments withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickup_details")
    public OrderFulfillmentsPickupDetails pickupDetails;
    public OrderFulfillments withPickupDetails(OrderFulfillmentsPickupDetails pickupDetails) {
        this.pickupDetails = pickupDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipment_details")
    public java.util.Map<String, Object> shipmentDetails;
    public OrderFulfillments withShipmentDetails(java.util.Map<String, Object> shipmentDetails) {
        this.shipmentDetails = shipmentDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OrderFulfillmentsFulfillmentStatusEnum status;
    public OrderFulfillments withStatus(OrderFulfillmentsFulfillmentStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OrderFulfillmentsTypeEnum type;
    public OrderFulfillments withType(OrderFulfillmentsTypeEnum type) {
        this.type = type;
        return this;
    }
}