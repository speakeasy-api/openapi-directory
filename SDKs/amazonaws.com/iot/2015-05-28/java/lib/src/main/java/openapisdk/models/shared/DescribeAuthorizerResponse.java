package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAuthorizerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerDescription")
    public AuthorizerDescription authorizerDescription;
    public DescribeAuthorizerResponse withAuthorizerDescription(AuthorizerDescription authorizerDescription) {
        this.authorizerDescription = authorizerDescription;
        return this;
    }
}