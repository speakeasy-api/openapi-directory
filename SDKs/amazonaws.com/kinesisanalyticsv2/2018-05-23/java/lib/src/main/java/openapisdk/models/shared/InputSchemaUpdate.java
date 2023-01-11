package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputSchemaUpdate
 * Describes updates for an SQL-based Kinesis Data Analytics application's input schema.
**/
public class InputSchemaUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordColumnUpdates")
    public RecordColumn[] recordColumnUpdates;
    public InputSchemaUpdate withRecordColumnUpdates(RecordColumn[] recordColumnUpdates) {
        this.recordColumnUpdates = recordColumnUpdates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordEncodingUpdate")
    public String recordEncodingUpdate;
    public InputSchemaUpdate withRecordEncodingUpdate(String recordEncodingUpdate) {
        this.recordEncodingUpdate = recordEncodingUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecordFormatUpdate")
    public RecordFormat recordFormatUpdate;
    public InputSchemaUpdate withRecordFormatUpdate(RecordFormat recordFormatUpdate) {
        this.recordFormatUpdate = recordFormatUpdate;
        return this;
    }
}