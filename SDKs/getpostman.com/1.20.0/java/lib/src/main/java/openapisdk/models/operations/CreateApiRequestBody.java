package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api")
    public CreateApiRequestBodyApi api;
    public CreateApiRequestBody withApi(CreateApiRequestBodyApi api) {
        this.api = api;
        return this;
    }
}