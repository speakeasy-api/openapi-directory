package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordFormat
 *  For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. 
**/
public class RecordFormat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MappingParameters")
    public MappingParameters mappingParameters;
    public RecordFormat withMappingParameters(MappingParameters mappingParameters) {
        this.mappingParameters = mappingParameters;
        return this;
    }
    @JsonProperty("RecordFormatType")
    public RecordFormatTypeEnum recordFormatType;
    public RecordFormat withRecordFormatType(RecordFormatTypeEnum recordFormatType) {
        this.recordFormatType = recordFormatType;
        return this;
    }
}