package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddCustomFieldSettingForProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.AddCustomFieldSettingRequest data;
    public AddCustomFieldSettingForProjectRequestBody withData(openapisdk.models.shared.AddCustomFieldSettingRequest data) {
        this.data = data;
        return this;
    }
}