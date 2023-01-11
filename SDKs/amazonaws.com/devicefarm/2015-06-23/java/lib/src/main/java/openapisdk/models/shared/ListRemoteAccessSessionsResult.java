package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRemoteAccessSessionsResult
 * Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.
**/
public class ListRemoteAccessSessionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRemoteAccessSessionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteAccessSessions")
    public RemoteAccessSession[] remoteAccessSessions;
    public ListRemoteAccessSessionsResult withRemoteAccessSessions(RemoteAccessSession[] remoteAccessSessions) {
        this.remoteAccessSessions = remoteAccessSessions;
        return this;
    }
}