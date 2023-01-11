package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewUsers {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("admin_users")
    public Long adminUsers;
    public EnterpriseOverviewUsers withAdminUsers(Long adminUsers) {
        this.adminUsers = adminUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspended_users")
    public Long suspendedUsers;
    public EnterpriseOverviewUsers withSuspendedUsers(Long suspendedUsers) {
        this.suspendedUsers = suspendedUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_users")
    public Long totalUsers;
    public EnterpriseOverviewUsers withTotalUsers(Long totalUsers) {
        this.totalUsers = totalUsers;
        return this;
    }
}