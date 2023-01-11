package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BundleRegistrationEntity
 * List Bundle Registrations
**/
public class BundleRegistrationEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickwrap_body")
    public String clickwrapBody;
    public BundleRegistrationEntity withClickwrapBody(String clickwrapBody) {
        this.clickwrapBody = clickwrapBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public BundleRegistrationEntity withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public BundleRegistrationEntity withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public BundleRegistrationEntity withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_field_data")
    public String formFieldData;
    public BundleRegistrationEntity withFormFieldData(String formFieldData) {
        this.formFieldData = formFieldData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_field_set_id")
    public Integer formFieldSetId;
    public BundleRegistrationEntity withFormFieldSetId(Integer formFieldSetId) {
        this.formFieldSetId = formFieldSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbox_code")
    public String inboxCode;
    public BundleRegistrationEntity withInboxCode(String inboxCode) {
        this.inboxCode = inboxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public BundleRegistrationEntity withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BundleRegistrationEntity withName(String name) {
        this.name = name;
        return this;
    }
}