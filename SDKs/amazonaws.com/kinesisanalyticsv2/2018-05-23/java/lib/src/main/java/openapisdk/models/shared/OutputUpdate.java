package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputUpdate
 *  For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>. 
**/
public class OutputUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationSchemaUpdate")
    public DestinationSchema destinationSchemaUpdate;
    public OutputUpdate withDestinationSchemaUpdate(DestinationSchema destinationSchemaUpdate) {
        this.destinationSchemaUpdate = destinationSchemaUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisFirehoseOutputUpdate")
    public KinesisFirehoseOutputUpdate kinesisFirehoseOutputUpdate;
    public OutputUpdate withKinesisFirehoseOutputUpdate(KinesisFirehoseOutputUpdate kinesisFirehoseOutputUpdate) {
        this.kinesisFirehoseOutputUpdate = kinesisFirehoseOutputUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisStreamsOutputUpdate")
    public KinesisStreamsOutputUpdate kinesisStreamsOutputUpdate;
    public OutputUpdate withKinesisStreamsOutputUpdate(KinesisStreamsOutputUpdate kinesisStreamsOutputUpdate) {
        this.kinesisStreamsOutputUpdate = kinesisStreamsOutputUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LambdaOutputUpdate")
    public LambdaOutputUpdate lambdaOutputUpdate;
    public OutputUpdate withLambdaOutputUpdate(LambdaOutputUpdate lambdaOutputUpdate) {
        this.lambdaOutputUpdate = lambdaOutputUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NameUpdate")
    public String nameUpdate;
    public OutputUpdate withNameUpdate(String nameUpdate) {
        this.nameUpdate = nameUpdate;
        return this;
    }
    @JsonProperty("OutputId")
    public String outputId;
    public OutputUpdate withOutputId(String outputId) {
        this.outputId = outputId;
        return this;
    }
}