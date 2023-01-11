package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails {
    @JsonProperty("primary")
    public Boolean primary;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails withValue(String value) {
        this.value = value;
        return this;
    }
}