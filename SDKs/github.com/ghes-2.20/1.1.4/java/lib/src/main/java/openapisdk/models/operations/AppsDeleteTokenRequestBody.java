package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsDeleteTokenRequestBody {
    @JsonProperty("access_token")
    public String accessToken;
    public AppsDeleteTokenRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
}