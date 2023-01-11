package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorizerSummary
 * The authorizer summary.
**/
public class AuthorizerSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerArn")
    public String authorizerArn;
    public AuthorizerSummary withAuthorizerArn(String authorizerArn) {
        this.authorizerArn = authorizerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerName")
    public String authorizerName;
    public AuthorizerSummary withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
}