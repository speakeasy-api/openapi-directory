package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPlaybackKeyPairResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPair")
    public PlaybackKeyPair keyPair;
    public GetPlaybackKeyPairResponse withKeyPair(PlaybackKeyPair keyPair) {
        this.keyPair = keyPair;
        return this;
    }
}