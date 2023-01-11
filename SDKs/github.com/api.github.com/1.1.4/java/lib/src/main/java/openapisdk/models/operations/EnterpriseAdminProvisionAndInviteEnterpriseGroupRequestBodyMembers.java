package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers {
    @JsonProperty("value")
    public String value;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers withValue(String value) {
        this.value = value;
        return this;
    }
}