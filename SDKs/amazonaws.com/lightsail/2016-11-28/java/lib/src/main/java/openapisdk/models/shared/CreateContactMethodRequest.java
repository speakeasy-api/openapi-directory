package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateContactMethodRequest {
    @JsonProperty("contactEndpoint")
    public String contactEndpoint;
    public CreateContactMethodRequest withContactEndpoint(String contactEndpoint) {
        this.contactEndpoint = contactEndpoint;
        return this;
    }
    @JsonProperty("protocol")
    public ContactProtocolEnum protocol;
    public CreateContactMethodRequest withProtocol(ContactProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}