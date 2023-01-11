package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteContactMethodRequest {
    @JsonProperty("protocol")
    public ContactProtocolEnum protocol;
    public DeleteContactMethodRequest withProtocol(ContactProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}