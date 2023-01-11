package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFindingsPublicationConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityHubConfiguration")
    public SecurityHubConfiguration securityHubConfiguration;
    public GetFindingsPublicationConfigurationResponse withSecurityHubConfiguration(SecurityHubConfiguration securityHubConfiguration) {
        this.securityHubConfiguration = securityHubConfiguration;
        return this;
    }
}