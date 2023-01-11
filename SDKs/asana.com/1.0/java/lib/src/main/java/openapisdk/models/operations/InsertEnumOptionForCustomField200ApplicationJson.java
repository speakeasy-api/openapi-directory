package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InsertEnumOptionForCustomField200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.EnumOption data;
    public InsertEnumOptionForCustomField200ApplicationJson withData(openapisdk.models.shared.EnumOption data) {
        this.data = data;
        return this;
    }
}