package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DestinationSchema
 * Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application. 
**/
public class DestinationSchema {
    @JsonProperty("RecordFormatType")
    public RecordFormatTypeEnum recordFormatType;
    public DestinationSchema withRecordFormatType(RecordFormatTypeEnum recordFormatType) {
        this.recordFormatType = recordFormatType;
        return this;
    }
}