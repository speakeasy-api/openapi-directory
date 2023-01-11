package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAnApiVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public UpdateAnApiVersionRequestBodyVersion version;
    public UpdateAnApiVersionRequestBody withVersion(UpdateAnApiVersionRequestBodyVersion version) {
        this.version = version;
        return this;
    }
}