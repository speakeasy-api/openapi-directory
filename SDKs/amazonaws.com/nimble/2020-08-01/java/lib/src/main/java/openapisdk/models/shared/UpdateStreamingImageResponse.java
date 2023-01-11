package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStreamingImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImage")
    public UpdateStreamingImageResponseStreamingImage streamingImage;
    public UpdateStreamingImageResponse withStreamingImage(UpdateStreamingImageResponseStreamingImage streamingImage) {
        this.streamingImage = streamingImage;
        return this;
    }
}