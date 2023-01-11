package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnableOrganizationAdminAccountRequestBody {
    @JsonProperty("AdminAccountId")
    public String adminAccountId;
    public EnableOrganizationAdminAccountRequestBody withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
}