package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTagRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.TagRequestInput data;
    public CreateTagRequestBodyInput withData(openapisdk.models.shared.TagRequestInput data) {
        this.data = data;
        return this;
    }
}