package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFieldCompact
 * Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
 * 
 * Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
**/
public class CustomFieldCompact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_value")
    public String displayValue;
    public CustomFieldCompact withDisplayValue(String displayValue) {
        this.displayValue = displayValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CustomFieldCompact withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enum_options")
    public EnumOption[] enumOptions;
    public CustomFieldCompact withEnumOptions(EnumOption[] enumOptions) {
        this.enumOptions = enumOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public CustomFieldCompact withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomFieldCompact withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_value")
    public Double numberValue;
    public CustomFieldCompact withNumberValue(Double numberValue) {
        this.numberValue = numberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public CustomFieldCompactResourceSubtypeEnum resourceSubtype;
    public CustomFieldCompact withResourceSubtype(CustomFieldCompactResourceSubtypeEnum resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public CustomFieldCompact withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_value")
    public String textValue;
    public CustomFieldCompact withTextValue(String textValue) {
        this.textValue = textValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CustomFieldCompactTypeEnum type;
    public CustomFieldCompact withType(CustomFieldCompactTypeEnum type) {
        this.type = type;
        return this;
    }
}