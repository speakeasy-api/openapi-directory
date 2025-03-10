/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ZendeskToken - JWT token to access Zendesk restricted help center
 */
public class ZendeskToken {
    /**
     * A JWT token build from your name and email to use on Zendesk
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;

    public ZendeskToken withToken(String token) {
        this.token = token;
        return this;
    }
    
    public ZendeskToken(){}
}
