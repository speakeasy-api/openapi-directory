package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetContactMethodsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocols")
    public ContactProtocolEnum[] protocols;
    public GetContactMethodsRequest withProtocols(ContactProtocolEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
}