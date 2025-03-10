/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChangePasswordRequest {
    /**
     * Your new password. Which must respect the same constraints as the user registeration
     */
    @JsonProperty("newPassword")
    public String newPassword;

    public ChangePasswordRequest withNewPassword(String newPassword) {
        this.newPassword = newPassword;
        return this;
    }
    
    /**
     * Your current password
     */
    @JsonProperty("oldPassword")
    public String oldPassword;

    public ChangePasswordRequest withOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
        return this;
    }
    
    public ChangePasswordRequest(@JsonProperty("newPassword") String newPassword, @JsonProperty("oldPassword") String oldPassword) {
        this.newPassword = newPassword;
        this.oldPassword = oldPassword;
  }
}
