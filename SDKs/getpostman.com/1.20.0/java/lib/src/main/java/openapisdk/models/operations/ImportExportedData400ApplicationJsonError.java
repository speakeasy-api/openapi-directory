package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExportedData400ApplicationJsonError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public ImportExportedData400ApplicationJsonErrorDetails details;
    public ImportExportedData400ApplicationJsonError withDetails(ImportExportedData400ApplicationJsonErrorDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ImportExportedData400ApplicationJsonError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImportExportedData400ApplicationJsonError withName(String name) {
        this.name = name;
        return this;
    }
}