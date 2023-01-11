package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FormField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_custom_values")
    public Boolean allowCustomValues;
    public FormField withAllowCustomValues(Boolean allowCustomValues) {
        this.allowCustomValues = allowCustomValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_field")
    public Boolean customField;
    public FormField withCustomField(Boolean customField) {
        this.customField = customField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FormField withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public FormField withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public FormField withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FormField withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public FormField withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public Object[] options;
    public FormField withOptions(Object[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placeholder")
    public String placeholder;
    public FormField withPlaceholder(String placeholder) {
        this.placeholder = placeholder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public FormField withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sensitive")
    public Boolean sensitive;
    public FormField withSensitive(Boolean sensitive) {
        this.sensitive = sensitive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Object type;
    public FormField withType(Object type) {
        this.type = type;
        return this;
    }
}