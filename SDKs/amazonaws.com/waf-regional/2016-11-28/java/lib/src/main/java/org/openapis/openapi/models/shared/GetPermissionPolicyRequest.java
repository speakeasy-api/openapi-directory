/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetPermissionPolicyRequest {
    @JsonProperty("ResourceArn")
    public String resourceArn;

    public GetPermissionPolicyRequest withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    
    public GetPermissionPolicyRequest(@JsonProperty("ResourceArn") String resourceArn) {
        this.resourceArn = resourceArn;
  }
}
