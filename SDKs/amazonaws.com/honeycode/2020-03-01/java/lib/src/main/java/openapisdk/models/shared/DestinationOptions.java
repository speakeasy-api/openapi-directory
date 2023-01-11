package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DestinationOptions
 * An object that contains the options relating to the destination of the import request.
**/
public class DestinationOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnMap")
    public java.util.Map<String, SourceDataColumnProperties> columnMap;
    public DestinationOptions withColumnMap(java.util.Map<String, SourceDataColumnProperties> columnMap) {
        this.columnMap = columnMap;
        return this;
    }
}