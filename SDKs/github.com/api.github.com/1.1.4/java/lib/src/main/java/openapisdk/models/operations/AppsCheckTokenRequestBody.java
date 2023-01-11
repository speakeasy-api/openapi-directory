package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsCheckTokenRequestBody {
    @JsonProperty("access_token")
    public String accessToken;
    public AppsCheckTokenRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
}