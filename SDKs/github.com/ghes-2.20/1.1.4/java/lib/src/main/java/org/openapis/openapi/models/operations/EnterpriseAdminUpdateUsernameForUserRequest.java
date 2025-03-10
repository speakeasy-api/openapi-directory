/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class EnterpriseAdminUpdateUsernameForUserRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public EnterpriseAdminUpdateUsernameForUserRequestBody requestBody;

    public EnterpriseAdminUpdateUsernameForUserRequest withRequestBody(EnterpriseAdminUpdateUsernameForUserRequestBody requestBody) {
        this.requestBody = requestBody;
        return this;
    }
    
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;

    public EnterpriseAdminUpdateUsernameForUserRequest withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public EnterpriseAdminUpdateUsernameForUserRequest(@JsonProperty("RequestBody") EnterpriseAdminUpdateUsernameForUserRequestBody requestBody, @JsonProperty("username") String username) {
        this.requestBody = requestBody;
        this.username = username;
  }
}
