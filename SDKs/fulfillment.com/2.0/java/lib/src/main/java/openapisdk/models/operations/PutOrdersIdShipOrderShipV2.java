package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrdersIdShipOrderShipV2 {
    @JsonProperty("trackingNumber")
    public String trackingNumber;
    public PutOrdersIdShipOrderShipV2 withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weightOverride")
    public Float weightOverride;
    public PutOrdersIdShipOrderShipV2 withWeightOverride(Float weightOverride) {
        this.weightOverride = weightOverride;
        return this;
    }
}