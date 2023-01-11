package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeScanValue")
    public String barcodeScanValue;
    public OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 withBarcodeScanValue(String barcodeScanValue) {
        this.barcodeScanValue = barcodeScanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 carrier;
    public OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 withCarrier(OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2 carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2 withValue(String value) {
        this.value = value;
        return this;
    }
}