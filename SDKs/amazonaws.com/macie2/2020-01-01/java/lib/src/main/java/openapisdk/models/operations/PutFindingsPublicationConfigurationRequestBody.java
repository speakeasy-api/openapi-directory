package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutFindingsPublicationConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public PutFindingsPublicationConfigurationRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityHubConfiguration")
    public PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration securityHubConfiguration;
    public PutFindingsPublicationConfigurationRequestBody withSecurityHubConfiguration(PutFindingsPublicationConfigurationRequestBodySecurityHubConfiguration securityHubConfiguration) {
        this.securityHubConfiguration = securityHubConfiguration;
        return this;
    }
}