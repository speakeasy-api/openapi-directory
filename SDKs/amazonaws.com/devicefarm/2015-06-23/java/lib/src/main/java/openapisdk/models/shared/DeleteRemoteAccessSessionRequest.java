package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteRemoteAccessSessionRequest
 * Represents the request to delete the specified remote access session.
**/
public class DeleteRemoteAccessSessionRequest {
    @JsonProperty("arn")
    public String arn;
    public DeleteRemoteAccessSessionRequest withArn(String arn) {
        this.arn = arn;
        return this;
    }
}