package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomField201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CustomFieldResponse data;
    public CreateCustomField201ApplicationJson withData(openapisdk.models.shared.CustomFieldResponse data) {
        this.data = data;
        return this;
    }
}