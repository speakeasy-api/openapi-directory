package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers {
    @JsonProperty("value")
    public String value;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers withValue(String value) {
        this.value = value;
        return this;
    }
}