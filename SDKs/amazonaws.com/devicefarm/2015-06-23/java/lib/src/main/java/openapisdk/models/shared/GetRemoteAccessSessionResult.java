package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRemoteAccessSessionResult
 * Represents the response from the server that lists detailed information about the remote access session.
**/
public class GetRemoteAccessSessionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteAccessSession")
    public RemoteAccessSession remoteAccessSession;
    public GetRemoteAccessSessionResult withRemoteAccessSession(RemoteAccessSession remoteAccessSession) {
        this.remoteAccessSession = remoteAccessSession;
        return this;
    }
}