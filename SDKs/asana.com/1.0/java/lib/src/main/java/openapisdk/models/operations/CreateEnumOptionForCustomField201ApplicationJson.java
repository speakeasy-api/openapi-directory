package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnumOptionForCustomField201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.EnumOption data;
    public CreateEnumOptionForCustomField201ApplicationJson withData(openapisdk.models.shared.EnumOption data) {
        this.data = data;
        return this;
    }
}