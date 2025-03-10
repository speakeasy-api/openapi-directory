/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AssociateUserAccessLoggingSettingsResponse - Success
 */
public class AssociateUserAccessLoggingSettingsResponse {
    @JsonProperty("portalArn")
    public String portalArn;

    public AssociateUserAccessLoggingSettingsResponse withPortalArn(String portalArn) {
        this.portalArn = portalArn;
        return this;
    }
    
    @JsonProperty("userAccessLoggingSettingsArn")
    public String userAccessLoggingSettingsArn;

    public AssociateUserAccessLoggingSettingsResponse withUserAccessLoggingSettingsArn(String userAccessLoggingSettingsArn) {
        this.userAccessLoggingSettingsArn = userAccessLoggingSettingsArn;
        return this;
    }
    
    public AssociateUserAccessLoggingSettingsResponse(@JsonProperty("portalArn") String portalArn, @JsonProperty("userAccessLoggingSettingsArn") String userAccessLoggingSettingsArn) {
        this.portalArn = portalArn;
        this.userAccessLoggingSettingsArn = userAccessLoggingSettingsArn;
  }
}
