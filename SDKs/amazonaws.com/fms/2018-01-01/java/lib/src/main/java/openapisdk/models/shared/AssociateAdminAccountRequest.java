package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateAdminAccountRequest {
    @JsonProperty("AdminAccount")
    public String adminAccount;
    public AssociateAdminAccountRequest withAdminAccount(String adminAccount) {
        this.adminAccount = adminAccount;
        return this;
    }
}