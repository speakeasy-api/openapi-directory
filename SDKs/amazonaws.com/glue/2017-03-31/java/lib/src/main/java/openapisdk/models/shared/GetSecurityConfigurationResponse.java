package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSecurityConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityConfiguration")
    public SecurityConfiguration securityConfiguration;
    public GetSecurityConfigurationResponse withSecurityConfiguration(SecurityConfiguration securityConfiguration) {
        this.securityConfiguration = securityConfiguration;
        return this;
    }
}