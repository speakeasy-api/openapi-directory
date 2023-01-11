package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputUpdate
 * For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). 
**/
public class InputUpdate {
    @JsonProperty("InputId")
    public String inputId;
    public InputUpdate withInputId(String inputId) {
        this.inputId = inputId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputParallelismUpdate")
    public InputParallelismUpdate inputParallelismUpdate;
    public InputUpdate withInputParallelismUpdate(InputParallelismUpdate inputParallelismUpdate) {
        this.inputParallelismUpdate = inputParallelismUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputProcessingConfigurationUpdate")
    public InputProcessingConfigurationUpdate inputProcessingConfigurationUpdate;
    public InputUpdate withInputProcessingConfigurationUpdate(InputProcessingConfigurationUpdate inputProcessingConfigurationUpdate) {
        this.inputProcessingConfigurationUpdate = inputProcessingConfigurationUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputSchemaUpdate")
    public InputSchemaUpdate inputSchemaUpdate;
    public InputUpdate withInputSchemaUpdate(InputSchemaUpdate inputSchemaUpdate) {
        this.inputSchemaUpdate = inputSchemaUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisFirehoseInputUpdate")
    public KinesisFirehoseInputUpdate kinesisFirehoseInputUpdate;
    public InputUpdate withKinesisFirehoseInputUpdate(KinesisFirehoseInputUpdate kinesisFirehoseInputUpdate) {
        this.kinesisFirehoseInputUpdate = kinesisFirehoseInputUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KinesisStreamsInputUpdate")
    public KinesisStreamsInputUpdate kinesisStreamsInputUpdate;
    public InputUpdate withKinesisStreamsInputUpdate(KinesisStreamsInputUpdate kinesisStreamsInputUpdate) {
        this.kinesisStreamsInputUpdate = kinesisStreamsInputUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamePrefixUpdate")
    public String namePrefixUpdate;
    public InputUpdate withNamePrefixUpdate(String namePrefixUpdate) {
        this.namePrefixUpdate = namePrefixUpdate;
        return this;
    }
}