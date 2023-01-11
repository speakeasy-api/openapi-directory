package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCustomField200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CustomFieldResponse data;
    public UpdateCustomField200ApplicationJson withData(openapisdk.models.shared.CustomFieldResponse data) {
        this.data = data;
        return this;
    }
}