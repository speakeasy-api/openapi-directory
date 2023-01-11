package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostFormFieldSets
 * Create Form Field Set
**/
public class PostFormFieldSets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_fields")
    public PostFormFieldSetsFormFields[] formFields;
    public PostFormFieldSets withFormFields(PostFormFieldSetsFormFields[] formFields) {
        this.formFields = formFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_company")
    public Boolean skipCompany;
    public PostFormFieldSets withSkipCompany(Boolean skipCompany) {
        this.skipCompany = skipCompany;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_email")
    public Boolean skipEmail;
    public PostFormFieldSets withSkipEmail(Boolean skipEmail) {
        this.skipEmail = skipEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skip_name")
    public Boolean skipName;
    public PostFormFieldSets withSkipName(Boolean skipName) {
        this.skipName = skipName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public PostFormFieldSets withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_id")
    public Integer userId;
    public PostFormFieldSets withUserId(Integer userId) {
        this.userId = userId;
        return this;
    }
}