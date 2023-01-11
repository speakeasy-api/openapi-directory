package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputCaptions
 * The captions to be created, if any.
**/
public class InputCaptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CaptionSources")
    public CaptionSource[] captionSources;
    public InputCaptions withCaptionSources(CaptionSource[] captionSources) {
        this.captionSources = captionSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MergePolicy")
    public String mergePolicy;
    public InputCaptions withMergePolicy(String mergePolicy) {
        this.mergePolicy = mergePolicy;
        return this;
    }
}