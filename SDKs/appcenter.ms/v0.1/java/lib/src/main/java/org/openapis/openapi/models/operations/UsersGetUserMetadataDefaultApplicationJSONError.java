/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersGetUserMetadataDefaultApplicationJSONError {
    @JsonProperty("code")
    public UsersGetUserMetadataDefaultApplicationJSONErrorCodeEnum code;

    public UsersGetUserMetadataDefaultApplicationJSONError withCode(UsersGetUserMetadataDefaultApplicationJSONErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    
    @JsonProperty("message")
    public String message;

    public UsersGetUserMetadataDefaultApplicationJSONError withMessage(String message) {
        this.message = message;
        return this;
    }
    
    public UsersGetUserMetadataDefaultApplicationJSONError(@JsonProperty("code") UsersGetUserMetadataDefaultApplicationJSONErrorCodeEnum code, @JsonProperty("message") String message) {
        this.code = code;
        this.message = message;
  }
}
