package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostFormFieldSetsFormFields {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_option")
    public String defaultOption;
    public PostFormFieldSetsFormFields withDefaultOption(String defaultOption) {
        this.defaultOption = defaultOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_type")
    public String fieldType;
    public PostFormFieldSetsFormFields withFieldType(String fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help_text")
    public String helpText;
    public PostFormFieldSetsFormFields withHelpText(String helpText) {
        this.helpText = helpText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public PostFormFieldSetsFormFields withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public PostFormFieldSetsFormFields withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options_for_select")
    public String optionsForSelect;
    public PostFormFieldSetsFormFields withOptionsForSelect(String optionsForSelect) {
        this.optionsForSelect = optionsForSelect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public PostFormFieldSetsFormFields withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}