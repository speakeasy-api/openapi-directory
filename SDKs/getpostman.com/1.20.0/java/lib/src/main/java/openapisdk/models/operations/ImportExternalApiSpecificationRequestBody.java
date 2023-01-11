package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("input")
    public ImportExternalApiSpecificationRequestBodyInput input;
    public ImportExternalApiSpecificationRequestBody withInput(ImportExternalApiSpecificationRequestBodyInput input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ImportExternalApiSpecificationRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}