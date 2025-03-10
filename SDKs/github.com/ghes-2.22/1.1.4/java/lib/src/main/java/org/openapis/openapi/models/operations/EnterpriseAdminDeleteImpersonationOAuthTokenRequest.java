/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EnterpriseAdminDeleteImpersonationOAuthTokenRequest {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;

    public EnterpriseAdminDeleteImpersonationOAuthTokenRequest withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public EnterpriseAdminDeleteImpersonationOAuthTokenRequest(@JsonProperty("username") String username) {
        this.username = username;
  }
}
