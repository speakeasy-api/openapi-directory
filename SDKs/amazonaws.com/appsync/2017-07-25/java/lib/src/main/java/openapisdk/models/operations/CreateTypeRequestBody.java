package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTypeRequestBody {
    @JsonProperty("definition")
    public String definition;
    public CreateTypeRequestBody withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    @JsonProperty("format")
    public CreateTypeRequestBodyFormatEnum format;
    public CreateTypeRequestBody withFormat(CreateTypeRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
}