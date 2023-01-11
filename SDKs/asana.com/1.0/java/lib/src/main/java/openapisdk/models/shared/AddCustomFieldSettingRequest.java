package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddCustomFieldSettingRequest {
    @JsonProperty("custom_field")
    public String customField;
    public AddCustomFieldSettingRequest withCustomField(String customField) {
        this.customField = customField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_after")
    public String insertAfter;
    public AddCustomFieldSettingRequest withInsertAfter(String insertAfter) {
        this.insertAfter = insertAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_before")
    public String insertBefore;
    public AddCustomFieldSettingRequest withInsertBefore(String insertBefore) {
        this.insertBefore = insertBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_important")
    public Boolean isImportant;
    public AddCustomFieldSettingRequest withIsImportant(Boolean isImportant) {
        this.isImportant = isImportant;
        return this;
    }
}