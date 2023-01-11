package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 carrier;
    public GetOrder200ApplicationJsonOrderResponseV2TrackingNumbers withCarrier(GetOrder200ApplicationJsonOrderResponseV2TrackingNumbersCarrierHydratedV2 carrier) {
        this.carrier = carrier;
        return this;
    }
}