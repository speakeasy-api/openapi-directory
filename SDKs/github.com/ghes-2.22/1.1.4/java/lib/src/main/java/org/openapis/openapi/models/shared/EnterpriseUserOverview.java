/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnterpriseUserOverview - Response
 */
public class EnterpriseUserOverview {
    @JsonProperty("admin_users")
    public Long adminUsers;

    public EnterpriseUserOverview withAdminUsers(Long adminUsers) {
        this.adminUsers = adminUsers;
        return this;
    }
    
    @JsonProperty("suspended_users")
    public Long suspendedUsers;

    public EnterpriseUserOverview withSuspendedUsers(Long suspendedUsers) {
        this.suspendedUsers = suspendedUsers;
        return this;
    }
    
    @JsonProperty("total_users")
    public Long totalUsers;

    public EnterpriseUserOverview withTotalUsers(Long totalUsers) {
        this.totalUsers = totalUsers;
        return this;
    }
    
    public EnterpriseUserOverview(@JsonProperty("admin_users") Long adminUsers, @JsonProperty("suspended_users") Long suspendedUsers, @JsonProperty("total_users") Long totalUsers) {
        this.adminUsers = adminUsers;
        this.suspendedUsers = suspendedUsers;
        this.totalUsers = totalUsers;
  }
}
