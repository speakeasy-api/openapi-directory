/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableOrganizationAdminAccountRequestBody {
    /**
     * The Amazon Web Services account identifier of the Security Hub administrator account.
     */
    @JsonProperty("AdminAccountId")
    public String adminAccountId;

    public DisableOrganizationAdminAccountRequestBody withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
    
    public DisableOrganizationAdminAccountRequestBody(@JsonProperty("AdminAccountId") String adminAccountId) {
        this.adminAccountId = adminAccountId;
  }
}
