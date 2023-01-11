package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetStreamingImageResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingImage")
    public StreamingImage streamingImage;
    public GetStreamingImageResponse withStreamingImage(StreamingImage streamingImage) {
        this.streamingImage = streamingImage;
        return this;
    }
}