package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Output
 * <p> Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. </p> <p/>
**/
public class Output {
    @JsonProperty("DestinationSchema")
    public DestinationSchema destinationSchema;
    public Output withDestinationSchema(DestinationSchema destinationSchema) {
        this.destinationSchema = destinationSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisFirehoseOutput")
    public KinesisFirehoseOutput kinesisFirehoseOutput;
    public Output withKinesisFirehoseOutput(KinesisFirehoseOutput kinesisFirehoseOutput) {
        this.kinesisFirehoseOutput = kinesisFirehoseOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisStreamsOutput")
    public KinesisStreamsOutput kinesisStreamsOutput;
    public Output withKinesisStreamsOutput(KinesisStreamsOutput kinesisStreamsOutput) {
        this.kinesisStreamsOutput = kinesisStreamsOutput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LambdaOutput")
    public LambdaOutput lambdaOutput;
    public Output withLambdaOutput(LambdaOutput lambdaOutput) {
        this.lambdaOutput = lambdaOutput;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Output withName(String name) {
        this.name = name;
        return this;
    }
}