package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetDefaultAuthorizerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerArn")
    public String authorizerArn;
    public SetDefaultAuthorizerResponse withAuthorizerArn(String authorizerArn) {
        this.authorizerArn = authorizerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerName")
    public String authorizerName;
    public SetDefaultAuthorizerResponse withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
}