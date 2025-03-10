/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AcceptResourceShareInvitationResponse - Success
 */
public class AcceptResourceShareInvitationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;

    public AcceptResourceShareInvitationResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareInvitation")
    public ResourceShareInvitation resourceShareInvitation;

    public AcceptResourceShareInvitationResponse withResourceShareInvitation(ResourceShareInvitation resourceShareInvitation) {
        this.resourceShareInvitation = resourceShareInvitation;
        return this;
    }
    
    public AcceptResourceShareInvitationResponse(){}
}
