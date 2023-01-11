package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTrackTrackingResponseTrackingNumberV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("barcodeScanValue")
    public String barcodeScanValue;
    public GetTrackTrackingResponseTrackingNumberV2 withBarcodeScanValue(String barcodeScanValue) {
        this.barcodeScanValue = barcodeScanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carrier")
    public GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 carrier;
    public GetTrackTrackingResponseTrackingNumberV2 withCarrier(GetTrackTrackingResponseTrackingNumberV2CarrierSimpleV2 carrier) {
        this.carrier = carrier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public GetTrackTrackingResponseTrackingNumberV2 withValue(String value) {
        this.value = value;
        return this;
    }
}