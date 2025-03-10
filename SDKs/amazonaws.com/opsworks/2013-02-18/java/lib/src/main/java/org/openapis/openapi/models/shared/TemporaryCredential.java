/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TemporaryCredential - Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.
 */
public class TemporaryCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;

    public TemporaryCredential withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Password")
    public String password;

    public TemporaryCredential withPassword(String password) {
        this.password = password;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Username")
    public String username;

    public TemporaryCredential withUsername(String username) {
        this.username = username;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidForInMinutes")
    public Long validForInMinutes;

    public TemporaryCredential withValidForInMinutes(Long validForInMinutes) {
        this.validForInMinutes = validForInMinutes;
        return this;
    }
    
    public TemporaryCredential(){}
}
