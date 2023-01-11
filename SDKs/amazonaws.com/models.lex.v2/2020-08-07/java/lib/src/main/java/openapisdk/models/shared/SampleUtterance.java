package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SampleUtterance
 * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
**/
public class SampleUtterance {
    @JsonProperty("utterance")
    public String utterance;
    public SampleUtterance withUtterance(String utterance) {
        this.utterance = utterance;
        return this;
    }
}