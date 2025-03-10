/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeclineHandshakeRequest {
    @JsonProperty("HandshakeId")
    public String handshakeId;

    public DeclineHandshakeRequest withHandshakeId(String handshakeId) {
        this.handshakeId = handshakeId;
        return this;
    }
    
    public DeclineHandshakeRequest(@JsonProperty("HandshakeId") String handshakeId) {
        this.handshakeId = handshakeId;
  }
}
