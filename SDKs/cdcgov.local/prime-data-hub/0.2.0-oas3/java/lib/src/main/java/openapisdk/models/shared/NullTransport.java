package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NullTransport
 * A transport type that does not do anything
**/
public class NullTransport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dummy")
    public String dummy;
    public NullTransport withDummy(String dummy) {
        this.dummy = dummy;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public NullTransport withType(String type) {
        this.type = type;
        return this;
    }
}