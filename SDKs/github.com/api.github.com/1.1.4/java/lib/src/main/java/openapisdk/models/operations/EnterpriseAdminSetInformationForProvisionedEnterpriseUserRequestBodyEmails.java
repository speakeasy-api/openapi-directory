package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails {
    @JsonProperty("primary")
    public Boolean primary;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails withValue(String value) {
        this.value = value;
        return this;
    }
}