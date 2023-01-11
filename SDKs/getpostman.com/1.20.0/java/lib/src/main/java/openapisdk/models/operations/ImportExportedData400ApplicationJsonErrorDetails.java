package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExportedData400ApplicationJsonErrorDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("param")
    public String param;
    public ImportExportedData400ApplicationJsonErrorDetails withParam(String param) {
        this.param = param;
        return this;
    }
}