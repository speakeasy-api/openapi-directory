package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetKeyPairsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPairs")
    public KeyPair[] keyPairs;
    public GetKeyPairsResult withKeyPairs(KeyPair[] keyPairs) {
        this.keyPairs = keyPairs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetKeyPairsResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}