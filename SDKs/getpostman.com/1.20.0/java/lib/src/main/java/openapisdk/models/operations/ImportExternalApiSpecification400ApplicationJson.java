package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecification400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImportExternalApiSpecification400ApplicationJsonError error;
    public ImportExternalApiSpecification400ApplicationJson withError(ImportExternalApiSpecification400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}