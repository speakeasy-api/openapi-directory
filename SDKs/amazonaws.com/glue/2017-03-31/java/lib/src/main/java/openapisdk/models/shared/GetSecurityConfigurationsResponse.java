package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSecurityConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetSecurityConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityConfigurations")
    public SecurityConfiguration[] securityConfigurations;
    public GetSecurityConfigurationsResponse withSecurityConfigurations(SecurityConfiguration[] securityConfigurations) {
        this.securityConfigurations = securityConfigurations;
        return this;
    }
}