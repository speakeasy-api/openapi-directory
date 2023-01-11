package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUserPoolMfaConfigRequest {
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public GetUserPoolMfaConfigRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}