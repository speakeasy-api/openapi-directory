package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RequestUploadCredentialsInput
 * Represents the input for a request operation.
**/
public class RequestUploadCredentialsInput {
    @JsonProperty("BuildId")
    public String buildId;
    public RequestUploadCredentialsInput withBuildId(String buildId) {
        this.buildId = buildId;
        return this;
    }
}