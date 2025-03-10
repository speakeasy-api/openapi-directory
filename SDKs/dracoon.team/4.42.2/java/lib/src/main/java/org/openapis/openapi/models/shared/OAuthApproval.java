/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * OAuthApproval - OAuth client approval information
 */
public class OAuthApproval {
    /**
     * ID of the OAuth client
     */
    @JsonProperty("clientId")
    public String clientId;
    public OAuthApproval withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    
    /**
     * Name, which is shown at the client configuration and authorization.
     */
    @JsonProperty("clientName")
    public String clientName;
    public OAuthApproval withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    
    /**
     * Expiration date of the approval
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("expiresAt")
    public OffsetDateTime expiresAt;
    public OAuthApproval withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
    
}
