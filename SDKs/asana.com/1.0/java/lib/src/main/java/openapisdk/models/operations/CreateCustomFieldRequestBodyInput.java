package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCustomFieldRequestBodyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CustomFieldRequestInput data;
    public CreateCustomFieldRequestBodyInput withData(openapisdk.models.shared.CustomFieldRequestInput data) {
        this.data = data;
        return this;
    }
}