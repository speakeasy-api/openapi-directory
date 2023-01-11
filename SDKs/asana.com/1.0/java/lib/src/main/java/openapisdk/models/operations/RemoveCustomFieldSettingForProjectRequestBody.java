package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveCustomFieldSettingForProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.RemoveCustomFieldSettingRequest data;
    public RemoveCustomFieldSettingForProjectRequestBody withData(openapisdk.models.shared.RemoveCustomFieldSettingRequest data) {
        this.data = data;
        return this;
    }
}