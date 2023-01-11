package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 carrier;
    public GetOrders200ApplicationJsonOrderResponseV2TrackingNumbers withCarrier(GetOrders200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 carrier) {
        this.carrier = carrier;
        return this;
    }
}