package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputDescription
 * Describes the application input configuration for a SQL-based Kinesis Data Analytics application. 
**/
public class InputDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InAppStreamNames")
    public String[] inAppStreamNames;
    public InputDescription withInAppStreamNames(String[] inAppStreamNames) {
        this.inAppStreamNames = inAppStreamNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputId")
    public String inputId;
    public InputDescription withInputId(String inputId) {
        this.inputId = inputId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputParallelism")
    public InputParallelism inputParallelism;
    public InputDescription withInputParallelism(InputParallelism inputParallelism) {
        this.inputParallelism = inputParallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputProcessingConfigurationDescription")
    public InputProcessingConfigurationDescription inputProcessingConfigurationDescription;
    public InputDescription withInputProcessingConfigurationDescription(InputProcessingConfigurationDescription inputProcessingConfigurationDescription) {
        this.inputProcessingConfigurationDescription = inputProcessingConfigurationDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputSchema")
    public SourceSchema inputSchema;
    public InputDescription withInputSchema(SourceSchema inputSchema) {
        this.inputSchema = inputSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputStartingPositionConfiguration")
    public InputStartingPositionConfiguration inputStartingPositionConfiguration;
    public InputDescription withInputStartingPositionConfiguration(InputStartingPositionConfiguration inputStartingPositionConfiguration) {
        this.inputStartingPositionConfiguration = inputStartingPositionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisFirehoseInputDescription")
    public KinesisFirehoseInputDescription kinesisFirehoseInputDescription;
    public InputDescription withKinesisFirehoseInputDescription(KinesisFirehoseInputDescription kinesisFirehoseInputDescription) {
        this.kinesisFirehoseInputDescription = kinesisFirehoseInputDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisStreamsInputDescription")
    public KinesisStreamsInputDescription kinesisStreamsInputDescription;
    public InputDescription withKinesisStreamsInputDescription(KinesisStreamsInputDescription kinesisStreamsInputDescription) {
        this.kinesisStreamsInputDescription = kinesisStreamsInputDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamePrefix")
    public String namePrefix;
    public InputDescription withNamePrefix(String namePrefix) {
        this.namePrefix = namePrefix;
        return this;
    }
}