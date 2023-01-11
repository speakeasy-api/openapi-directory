package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Input
 * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. 
**/
public class Input {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputParallelism")
    public InputParallelism inputParallelism;
    public Input withInputParallelism(InputParallelism inputParallelism) {
        this.inputParallelism = inputParallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputProcessingConfiguration")
    public InputProcessingConfiguration inputProcessingConfiguration;
    public Input withInputProcessingConfiguration(InputProcessingConfiguration inputProcessingConfiguration) {
        this.inputProcessingConfiguration = inputProcessingConfiguration;
        return this;
    }
    @JsonProperty("InputSchema")
    public SourceSchema inputSchema;
    public Input withInputSchema(SourceSchema inputSchema) {
        this.inputSchema = inputSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisFirehoseInput")
    public KinesisFirehoseInput kinesisFirehoseInput;
    public Input withKinesisFirehoseInput(KinesisFirehoseInput kinesisFirehoseInput) {
        this.kinesisFirehoseInput = kinesisFirehoseInput;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisStreamsInput")
    public KinesisStreamsInput kinesisStreamsInput;
    public Input withKinesisStreamsInput(KinesisStreamsInput kinesisStreamsInput) {
        this.kinesisStreamsInput = kinesisStreamsInput;
        return this;
    }
    @JsonProperty("NamePrefix")
    public String namePrefix;
    public Input withNamePrefix(String namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    }
}