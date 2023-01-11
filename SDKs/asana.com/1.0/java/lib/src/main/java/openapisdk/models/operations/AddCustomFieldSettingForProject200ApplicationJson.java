package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddCustomFieldSettingForProject200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CustomFieldSettingResponse data;
    public AddCustomFieldSettingForProject200ApplicationJson withData(openapisdk.models.shared.CustomFieldSettingResponse data) {
        this.data = data;
        return this;
    }
}