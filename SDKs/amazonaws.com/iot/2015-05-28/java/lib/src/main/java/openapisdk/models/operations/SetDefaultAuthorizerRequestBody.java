package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetDefaultAuthorizerRequestBody {
    @JsonProperty("authorizerName")
    public String authorizerName;
    public SetDefaultAuthorizerRequestBody withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
}