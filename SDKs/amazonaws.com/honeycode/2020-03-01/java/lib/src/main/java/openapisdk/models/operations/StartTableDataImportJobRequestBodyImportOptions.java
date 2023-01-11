package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartTableDataImportJobRequestBodyImportOptions
 * An object that contains the options specified by the sumitter of the import request.
**/
public class StartTableDataImportJobRequestBodyImportOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delimitedTextOptions")
    public openapisdk.models.shared.DelimitedTextImportOptions delimitedTextOptions;
    public StartTableDataImportJobRequestBodyImportOptions withDelimitedTextOptions(openapisdk.models.shared.DelimitedTextImportOptions delimitedTextOptions) {
        this.delimitedTextOptions = delimitedTextOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationOptions")
    public openapisdk.models.shared.DestinationOptions destinationOptions;
    public StartTableDataImportJobRequestBodyImportOptions withDestinationOptions(openapisdk.models.shared.DestinationOptions destinationOptions) {
        this.destinationOptions = destinationOptions;
        return this;
    }
}