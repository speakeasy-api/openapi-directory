/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StopRemoteAccessSessionResult - Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.
 */
public class StopRemoteAccessSessionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteAccessSession")
    public RemoteAccessSession remoteAccessSession;

    public StopRemoteAccessSessionResult withRemoteAccessSession(RemoteAccessSession remoteAccessSession) {
        this.remoteAccessSession = remoteAccessSession;
        return this;
    }
    
    public StopRemoteAccessSessionResult(){}
}
