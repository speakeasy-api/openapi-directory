package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InboxRegistrationEntity
 * List Inbox Registrations
**/
public class InboxRegistrationEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickwrap_body")
    public String clickwrapBody;
    public InboxRegistrationEntity withClickwrapBody(String clickwrapBody) {
        this.clickwrapBody = clickwrapBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public InboxRegistrationEntity withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public InboxRegistrationEntity withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public InboxRegistrationEntity withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_field_data")
    public String formFieldData;
    public InboxRegistrationEntity withFormFieldData(String formFieldData) {
        this.formFieldData = formFieldData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_field_set_id")
    public Integer formFieldSetId;
    public InboxRegistrationEntity withFormFieldSetId(Integer formFieldSetId) {
        this.formFieldSetId = formFieldSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InboxRegistrationEntity withName(String name) {
        this.name = name;
        return this;
    }
}