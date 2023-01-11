package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrdersOrderResponseV2TrackingNumberV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeScanValue")
    public String barcodeScanValue;
    public PostOrdersOrderResponseV2TrackingNumberV2 withBarcodeScanValue(String barcodeScanValue) {
        this.barcodeScanValue = barcodeScanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 carrier;
    public PostOrdersOrderResponseV2TrackingNumberV2 withCarrier(PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2 carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public PostOrdersOrderResponseV2TrackingNumberV2 withValue(String value) {
        this.value = value;
        return this;
    }
}