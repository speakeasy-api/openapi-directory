package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetRemoteAccessSessionRequest
 * Represents the request to get information about the specified remote access session.
**/
public class GetRemoteAccessSessionRequest {
    @JsonProperty("arn")
    public String arn;
    public GetRemoteAccessSessionRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}