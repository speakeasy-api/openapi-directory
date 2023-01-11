package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormFieldSetEntity
 * Create Form Field Set
**/
public class FormFieldSetEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_fields")
    public FormFieldEntity formFields;
    public FormFieldSetEntity withFormFields(FormFieldEntity formFields) {
        this.formFields = formFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_layout")
    public Integer formLayout;
    public FormFieldSetEntity withFormLayout(Integer formLayout) {
        this.formLayout = formLayout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public FormFieldSetEntity withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_company")
    public Boolean skipCompany;
    public FormFieldSetEntity withSkipCompany(Boolean skipCompany) {
        this.skipCompany = skipCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_email")
    public Boolean skipEmail;
    public FormFieldSetEntity withSkipEmail(Boolean skipEmail) {
        this.skipEmail = skipEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_name")
    public Boolean skipName;
    public FormFieldSetEntity withSkipName(Boolean skipName) {
        this.skipName = skipName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public FormFieldSetEntity withTitle(String title) {
        this.title = title;
        return this;
    }
}