/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class RegisterRequest {
    /**
     * The user id of your commercial in BeezUP.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commercialOwnerUserId")
    public String commercialOwnerUserId;

    public RegisterRequest withCommercialOwnerUserId(String commercialOwnerUserId) {
        this.commercialOwnerUserId = commercialOwnerUserId;
        return this;
    }
    
    /**
     * Can be null. Default: en-GB. The culture name you want to use. FYI. \
     * The email activation will use this culture.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cultureName")
    public String cultureName;

    public RegisterRequest withCultureName(String cultureName) {
        this.cultureName = cultureName;
        return this;
    }
    
    /**
     * Your email. We refuse disposable email.
     */
    @JsonProperty("email")
    public String email;

    public RegisterRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    
    /**
     * The password you want to use for your new account. \
     * The password length must be greater or equals to 6 and lower or equals to 128. \
     * The password must contains at least one number and one special character
     * 
     */
    @JsonProperty("password")
    public String password;

    public RegisterRequest withPassword(String password) {
        this.password = password;
        return this;
    }
    
    public RegisterRequest(@JsonProperty("email") String email, @JsonProperty("password") String password) {
        this.email = email;
        this.password = password;
  }
}
