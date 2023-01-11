package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatchFormFieldSetsFormFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_option")
    public String defaultOption;
    public PatchFormFieldSetsFormFields withDefaultOption(String defaultOption) {
        this.defaultOption = defaultOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_type")
    public String fieldType;
    public PatchFormFieldSetsFormFields withFieldType(String fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help_text")
    public String helpText;
    public PatchFormFieldSetsFormFields withHelpText(String helpText) {
        this.helpText = helpText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public PatchFormFieldSetsFormFields withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public PatchFormFieldSetsFormFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options_for_select")
    public String optionsForSelect;
    public PatchFormFieldSetsFormFields withOptionsForSelect(String optionsForSelect) {
        this.optionsForSelect = optionsForSelect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public PatchFormFieldSetsFormFields withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}