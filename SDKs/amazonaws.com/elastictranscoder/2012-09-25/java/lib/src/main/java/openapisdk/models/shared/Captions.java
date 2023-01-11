package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Captions
 * The captions to be created, if any.
**/
public class Captions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CaptionFormats")
    public CaptionFormat[] captionFormats;
    public Captions withCaptionFormats(CaptionFormat[] captionFormats) {
        this.captionFormats = captionFormats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CaptionSources")
    public java.util.Map<String, Object> captionSources;
    public Captions withCaptionSources(java.util.Map<String, Object> captionSources) {
        this.captionSources = captionSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MergePolicy")
    public java.util.Map<String, Object> mergePolicy;
    public Captions withMergePolicy(java.util.Map<String, Object> mergePolicy) {
        this.mergePolicy = mergePolicy;
        return this;
    }
}