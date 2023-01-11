package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFieldSettingResponse
 * Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
**/
public class CustomFieldSettingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field")
    public CustomFieldSettingResponseCustomField customField;
    public CustomFieldSettingResponse withCustomField(CustomFieldSettingResponseCustomField customField) {
        this.customField = customField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public CustomFieldSettingResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_important")
    public Boolean isImportant;
    public CustomFieldSettingResponse withIsImportant(Boolean isImportant) {
        this.isImportant = isImportant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public CustomFieldSettingResponseParent parent;
    public CustomFieldSettingResponse withParent(CustomFieldSettingResponseParent parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public CustomFieldSettingResponseProject project;
    public CustomFieldSettingResponse withProject(CustomFieldSettingResponseProject project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public CustomFieldSettingResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}