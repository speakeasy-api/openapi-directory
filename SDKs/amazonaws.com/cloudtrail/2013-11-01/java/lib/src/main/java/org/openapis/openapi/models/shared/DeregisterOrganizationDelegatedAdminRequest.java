/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeregisterOrganizationDelegatedAdminRequest - Removes CloudTrail delegated administrator permissions from a specified member account in an organization that is currently designated as a delegated administrator.
 */
public class DeregisterOrganizationDelegatedAdminRequest {
    @JsonProperty("DelegatedAdminAccountId")
    public String delegatedAdminAccountId;

    public DeregisterOrganizationDelegatedAdminRequest withDelegatedAdminAccountId(String delegatedAdminAccountId) {
        this.delegatedAdminAccountId = delegatedAdminAccountId;
        return this;
    }
    
    public DeregisterOrganizationDelegatedAdminRequest(@JsonProperty("DelegatedAdminAccountId") String delegatedAdminAccountId) {
        this.delegatedAdminAccountId = delegatedAdminAccountId;
  }
}
