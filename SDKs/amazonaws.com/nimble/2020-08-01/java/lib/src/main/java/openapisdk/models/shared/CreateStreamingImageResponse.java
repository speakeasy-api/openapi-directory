package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStreamingImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImage")
    public CreateStreamingImageResponseStreamingImage streamingImage;
    public CreateStreamingImageResponse withStreamingImage(CreateStreamingImageResponseStreamingImage streamingImage) {
        this.streamingImage = streamingImage;
        return this;
    }
}