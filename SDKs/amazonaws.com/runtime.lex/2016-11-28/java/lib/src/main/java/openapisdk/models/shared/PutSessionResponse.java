package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSessionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioStream")
    public String audioStream;
    public PutSessionResponse withAudioStream(String audioStream) {
        this.audioStream = audioStream;
        return this;
    }
}