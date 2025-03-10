/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateUserResponse - The object that's returned when a user record is created.
 */
public class CreateUserResponse {
    /**
     * The user's email address
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;

    public CreateUserResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    
    /**
     * The user's password reset code
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guid")
    public String guid;

    public CreateUserResponse withGuid(String guid) {
        this.guid = guid;
        return this;
    }
    
    public CreateUserResponse(){}
}
