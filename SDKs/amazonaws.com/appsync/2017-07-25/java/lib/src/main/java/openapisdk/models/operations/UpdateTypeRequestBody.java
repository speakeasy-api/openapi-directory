package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTypeRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public String definition;
    public UpdateTypeRequestBody withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    @JsonProperty("format")
    public UpdateTypeRequestBodyFormatEnum format;
    public UpdateTypeRequestBody withFormat(UpdateTypeRequestBodyFormatEnum format) {
        this.format = format;
        return this;
    }
}