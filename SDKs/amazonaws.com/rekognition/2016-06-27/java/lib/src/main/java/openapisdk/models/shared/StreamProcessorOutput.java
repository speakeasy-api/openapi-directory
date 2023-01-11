package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StreamProcessorOutput
 * Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
**/
public class StreamProcessorOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisDataStream")
    public KinesisDataStream kinesisDataStream;
    public StreamProcessorOutput withKinesisDataStream(KinesisDataStream kinesisDataStream) {
        this.kinesisDataStream = kinesisDataStream;
        return this;
    }
}