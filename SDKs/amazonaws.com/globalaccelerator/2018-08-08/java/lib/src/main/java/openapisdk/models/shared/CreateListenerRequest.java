package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateListenerRequest {
    @JsonProperty("AcceleratorArn")
    public String acceleratorArn;
    public CreateListenerRequest withAcceleratorArn(String acceleratorArn) {
        this.acceleratorArn = acceleratorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientAffinity")
    public ClientAffinityEnum clientAffinity;
    public CreateListenerRequest withClientAffinity(ClientAffinityEnum clientAffinity) {
        this.clientAffinity = clientAffinity;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public CreateListenerRequest withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonProperty("PortRanges")
    public PortRange[] portRanges;
    public CreateListenerRequest withPortRanges(PortRange[] portRanges) {
        this.portRanges = portRanges;
        return this;
    }
    @JsonProperty("Protocol")
    public ProtocolEnum protocol;
    public CreateListenerRequest withProtocol(ProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}