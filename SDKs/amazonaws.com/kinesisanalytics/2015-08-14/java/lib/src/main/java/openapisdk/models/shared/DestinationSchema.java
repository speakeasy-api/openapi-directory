package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DestinationSchema
 * Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. 
**/
public class DestinationSchema {
    @JsonProperty("RecordFormatType")
    public RecordFormatTypeEnum recordFormatType;
    public DestinationSchema withRecordFormatType(RecordFormatTypeEnum recordFormatType) {
        this.recordFormatType = recordFormatType;
        return this;
    }
}