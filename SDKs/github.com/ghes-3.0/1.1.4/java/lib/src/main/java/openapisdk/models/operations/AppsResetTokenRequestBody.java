package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsResetTokenRequestBody {
    @JsonProperty("access_token")
    public String accessToken;
    public AppsResetTokenRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
}