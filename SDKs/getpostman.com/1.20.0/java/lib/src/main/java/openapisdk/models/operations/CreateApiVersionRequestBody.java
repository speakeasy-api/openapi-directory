package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public CreateApiVersionRequestBodyVersion version;
    public CreateApiVersionRequestBody withVersion(CreateApiVersionRequestBodyVersion version) {
        this.version = version;
        return this;
    }
}