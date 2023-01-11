package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
    public String format;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema withFormat(String format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ImportExternalApiSpecificationRequestBodyInputPathsPetsGetParametersSchema withType(String type) {
        this.type = type;
        return this;
    }
}