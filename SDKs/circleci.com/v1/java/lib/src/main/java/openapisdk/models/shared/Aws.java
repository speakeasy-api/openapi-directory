package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Aws {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keypair")
    public String keypair;
    public Aws withKeypair(String keypair) {
        this.keypair = keypair;
        return this;
    }
}