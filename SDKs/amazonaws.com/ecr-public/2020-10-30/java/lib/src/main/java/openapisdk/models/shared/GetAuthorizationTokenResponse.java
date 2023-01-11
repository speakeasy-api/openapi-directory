package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAuthorizationTokenResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationData")
    public AuthorizationData authorizationData;
    public GetAuthorizationTokenResponse withAuthorizationData(AuthorizationData authorizationData) {
        this.authorizationData = authorizationData;
        return this;
    }
}