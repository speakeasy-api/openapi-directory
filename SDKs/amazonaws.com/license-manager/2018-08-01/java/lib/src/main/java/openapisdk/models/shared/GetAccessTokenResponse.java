package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccessTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessToken")
    public String accessToken;
    public GetAccessTokenResponse withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
}