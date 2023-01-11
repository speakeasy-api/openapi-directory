package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetKeyPairResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPair")
    public KeyPair keyPair;
    public GetKeyPairResult withKeyPair(KeyPair keyPair) {
        this.keyPair = keyPair;
        return this;
    }
}