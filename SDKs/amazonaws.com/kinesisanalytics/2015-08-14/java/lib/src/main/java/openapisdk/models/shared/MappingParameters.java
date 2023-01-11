package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MappingParameters
 * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
**/
public class MappingParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CSVMappingParameters")
    public CsvMappingParameters csvMappingParameters;
    public MappingParameters withCsvMappingParameters(CsvMappingParameters csvMappingParameters) {
        this.csvMappingParameters = csvMappingParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JSONMappingParameters")
    public JsonMappingParameters jsonMappingParameters;
    public MappingParameters withJsonMappingParameters(JsonMappingParameters jsonMappingParameters) {
        this.jsonMappingParameters = jsonMappingParameters;
        return this;
    }
}