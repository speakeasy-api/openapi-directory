package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnumOptionRequestInput
 * Enum options are the possible values which an enum custom field can adopt. An enum custom field must contain at least 1 enum option but no more than 50.
 * 
 * You can add enum options to a custom field by using the `POST /custom_fields/custom_field_gid/enum_options` endpoint.
 * 
 * **It is not possible to remove or delete an enum option**. Instead, enum options can be disabled by updating the `enabled` field to false with the `PUT /enum_options/enum_option_gid` endpoint. Other attributes can be updated similarly.
 * 
 * On creation of an enum option, `enabled` is always set to `true`, meaning the enum option is a selectable value for the custom field. Setting `enabled=false` is equivalent to “trashing” the enum option in the Asana web app within the “Edit Fields” dialog. The enum option will no longer be selectable but, if the enum option value was previously set within a task, the task will retain the value.
 * 
 * Enum options are an ordered list and by default new enum options are inserted at the end. Ordering in relation to existing enum options can be specified on creation by using `insert_before` or `insert_after` to reference an existing enum option. Only one of `insert_before` and `insert_after` can be provided when creating a new enum option.
 * 
 * An enum options list can be reordered with the `POST /custom_fields/custom_field_gid/enum_options/insert` endpoint.
**/
public class EnumOptionRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public EnumOptionRequestInput withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public EnumOptionRequestInput withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_after")
    public String insertAfter;
    public EnumOptionRequestInput withInsertAfter(String insertAfter) {
        this.insertAfter = insertAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_before")
    public String insertBefore;
    public EnumOptionRequestInput withInsertBefore(String insertBefore) {
        this.insertBefore = insertBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnumOptionRequestInput withName(String name) {
        this.name = name;
        return this;
    }
}