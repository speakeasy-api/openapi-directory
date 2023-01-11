package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdminAccount")
    public String adminAccount;
    public GetAdminAccountResponse withAdminAccount(String adminAccount) {
        this.adminAccount = adminAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleStatus")
    public AccountRoleStatusEnum roleStatus;
    public GetAdminAccountResponse withRoleStatus(AccountRoleStatusEnum roleStatus) {
        this.roleStatus = roleStatus;
        return this;
    }
}