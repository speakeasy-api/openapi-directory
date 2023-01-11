package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppsDeleteAuthorizationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public AppsDeleteAuthorizationRequestBody withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
}