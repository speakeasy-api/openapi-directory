package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterOrganizationAdminAccountRequestBody {
    @JsonProperty("adminAccountId")
    public String adminAccountId;
    public RegisterOrganizationAdminAccountRequestBody withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
}