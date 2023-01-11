package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostContentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audioStream")
    public String audioStream;
    public PostContentResponse withAudioStream(String audioStream) {
        this.audioStream = audioStream;
        return this;
    }
}