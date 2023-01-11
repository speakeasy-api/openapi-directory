package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPlaybackKeyPairsResponse {
    @JsonProperty("keyPairs")
    public PlaybackKeyPairSummary[] keyPairs;
    public ListPlaybackKeyPairsResponse withKeyPairs(PlaybackKeyPairSummary[] keyPairs) {
        this.keyPairs = keyPairs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPlaybackKeyPairsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}