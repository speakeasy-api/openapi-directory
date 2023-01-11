package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FormFieldEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_option")
    public String defaultOption;
    public FormFieldEntity withDefaultOption(String defaultOption) {
        this.defaultOption = defaultOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_type")
    public FormFieldEntityFieldTypeEnum fieldType;
    public FormFieldEntity withFieldType(FormFieldEntityFieldTypeEnum fieldType) {
        this.fieldType = fieldType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_field_set_id")
    public Integer formFieldSetId;
    public FormFieldEntity withFormFieldSetId(Integer formFieldSetId) {
        this.formFieldSetId = formFieldSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("help_text")
    public String helpText;
    public FormFieldEntity withHelpText(String helpText) {
        this.helpText = helpText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public FormFieldEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public FormFieldEntity withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options_for_select")
    public String optionsForSelect;
    public FormFieldEntity withOptionsForSelect(String optionsForSelect) {
        this.optionsForSelect = optionsForSelect;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public FormFieldEntity withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}