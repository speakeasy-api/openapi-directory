package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListRemoteAccessSessionsRequest
 * Represents the request to return information about the remote access session.
**/
public class ListRemoteAccessSessionsRequest {
    @JsonProperty("arn")
    public String arn;
    public ListRemoteAccessSessionsRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListRemoteAccessSessionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}