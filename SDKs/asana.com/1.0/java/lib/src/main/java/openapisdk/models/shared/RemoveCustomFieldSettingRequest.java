package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveCustomFieldSettingRequest {
    @JsonProperty("custom_field")
    public String customField;
    public RemoveCustomFieldSettingRequest withCustomField(String customField) {
        this.customField = customField;
        return this;
    }
}