package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamProcessorInput
 * Information about the source streaming video. 
**/
public class StreamProcessorInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisVideoStream")
    public KinesisVideoStream kinesisVideoStream;
    public StreamProcessorInput withKinesisVideoStream(KinesisVideoStream kinesisVideoStream) {
        this.kinesisVideoStream = kinesisVideoStream;
        return this;
    }
}