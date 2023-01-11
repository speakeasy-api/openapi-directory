package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableOrganizationAdminAccountRequestBody {
    @JsonProperty("AdminAccountId")
    public String adminAccountId;
    public DisableOrganizationAdminAccountRequestBody withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
}