/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DistributionGroupsRemoveUserDefaultApplicationJSONError {
    @JsonProperty("code")
    public DistributionGroupsRemoveUserDefaultApplicationJSONErrorCodeEnum code;

    public DistributionGroupsRemoveUserDefaultApplicationJSONError withCode(DistributionGroupsRemoveUserDefaultApplicationJSONErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    
    @JsonProperty("message")
    public String message;

    public DistributionGroupsRemoveUserDefaultApplicationJSONError withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public DistributionGroupsRemoveUserDefaultApplicationJSONError(@JsonProperty("code") DistributionGroupsRemoveUserDefaultApplicationJSONErrorCodeEnum code, @JsonProperty("message") String message) {
        this.code = code;
        this.message = message;
  }
}
