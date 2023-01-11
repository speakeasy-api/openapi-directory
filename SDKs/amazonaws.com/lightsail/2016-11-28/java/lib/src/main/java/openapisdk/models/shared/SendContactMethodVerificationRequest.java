package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SendContactMethodVerificationRequest {
    @JsonProperty("protocol")
    public ContactMethodVerificationProtocolEnum protocol;
    public SendContactMethodVerificationRequest withProtocol(ContactMethodVerificationProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}