package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PatchFormFieldSets
 * Update Form Field Set
**/
public class PatchFormFieldSets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_fields")
    public PatchFormFieldSetsFormFields[] formFields;
    public PatchFormFieldSets withFormFields(PatchFormFieldSetsFormFields[] formFields) {
        this.formFields = formFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_company")
    public Boolean skipCompany;
    public PatchFormFieldSets withSkipCompany(Boolean skipCompany) {
        this.skipCompany = skipCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_email")
    public Boolean skipEmail;
    public PatchFormFieldSets withSkipEmail(Boolean skipEmail) {
        this.skipEmail = skipEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_name")
    public Boolean skipName;
    public PatchFormFieldSets withSkipName(Boolean skipName) {
        this.skipName = skipName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PatchFormFieldSets withTitle(String title) {
        this.title = title;
        return this;
    }
}