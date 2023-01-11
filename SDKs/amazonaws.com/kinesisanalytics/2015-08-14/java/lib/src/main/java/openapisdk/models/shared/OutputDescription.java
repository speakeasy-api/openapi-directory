package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputDescription
 * Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. 
**/
public class OutputDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationSchema")
    public DestinationSchema destinationSchema;
    public OutputDescription withDestinationSchema(DestinationSchema destinationSchema) {
        this.destinationSchema = destinationSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisFirehoseOutputDescription")
    public KinesisFirehoseOutputDescription kinesisFirehoseOutputDescription;
    public OutputDescription withKinesisFirehoseOutputDescription(KinesisFirehoseOutputDescription kinesisFirehoseOutputDescription) {
        this.kinesisFirehoseOutputDescription = kinesisFirehoseOutputDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisStreamsOutputDescription")
    public KinesisStreamsOutputDescription kinesisStreamsOutputDescription;
    public OutputDescription withKinesisStreamsOutputDescription(KinesisStreamsOutputDescription kinesisStreamsOutputDescription) {
        this.kinesisStreamsOutputDescription = kinesisStreamsOutputDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LambdaOutputDescription")
    public LambdaOutputDescription lambdaOutputDescription;
    public OutputDescription withLambdaOutputDescription(LambdaOutputDescription lambdaOutputDescription) {
        this.lambdaOutputDescription = lambdaOutputDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public OutputDescription withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutputId")
    public String outputId;
    public OutputDescription withOutputId(String outputId) {
        this.outputId = outputId;
        return this;
    }
}