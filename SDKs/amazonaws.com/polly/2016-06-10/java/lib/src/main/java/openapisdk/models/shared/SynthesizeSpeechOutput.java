package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SynthesizeSpeechOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AudioStream")
    public String audioStream;
    public SynthesizeSpeechOutput withAudioStream(String audioStream) {
        this.audioStream = audioStream;
        return this;
    }
}