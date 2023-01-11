package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecification400ApplicationJsonError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public ImportExternalApiSpecification400ApplicationJsonErrorDetails details;
    public ImportExternalApiSpecification400ApplicationJsonError withDetails(ImportExternalApiSpecification400ApplicationJsonErrorDetails details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ImportExternalApiSpecification400ApplicationJsonError withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ImportExternalApiSpecification400ApplicationJsonError withName(String name) {
        this.name = name;
        return this;
    }
}