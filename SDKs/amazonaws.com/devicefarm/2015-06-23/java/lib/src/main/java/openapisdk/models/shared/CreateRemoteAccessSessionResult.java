package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateRemoteAccessSessionResult
 * Represents the server response from a request to create a remote access session.
**/
public class CreateRemoteAccessSessionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteAccessSession")
    public RemoteAccessSession remoteAccessSession;
    public CreateRemoteAccessSessionResult withRemoteAccessSession(RemoteAccessSession remoteAccessSession) {
        this.remoteAccessSession = remoteAccessSession;
        return this;
    }
}