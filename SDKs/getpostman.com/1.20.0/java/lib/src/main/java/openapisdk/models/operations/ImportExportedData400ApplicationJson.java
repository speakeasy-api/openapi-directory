package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExportedData400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImportExportedData400ApplicationJsonError error;
    public ImportExportedData400ApplicationJson withError(ImportExportedData400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}