package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSessionResponseData {
    @JsonProperty("session_token")
    public String sessionToken;
    public CreateSessionResponseData withSessionToken(String sessionToken) {
        this.sessionToken = sessionToken;
        return this;
    }
    @JsonProperty("session_uri")
    public String sessionUri;
    public CreateSessionResponseData withSessionUri(String sessionUri) {
        this.sessionUri = sessionUri;
        return this;
    }
}