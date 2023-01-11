package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCustomRoutingListenerRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public CreateCustomRoutingListenerRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public CreateCustomRoutingListenerRequest withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonProperty("PortRanges")
    public PortRange[] portRanges;
    public CreateCustomRoutingListenerRequest withPortRanges(PortRange[] portRanges) {
        this.portRanges = portRanges;
        return this;
    }
}