package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OrganizationConfiguration
 * Configuration information for AWS Organizations.
**/
public class OrganizationConfiguration {
    @JsonProperty("EnableIntegration")
    public Boolean enableIntegration;
    public OrganizationConfiguration withEnableIntegration(Boolean enableIntegration) {
        this.enableIntegration = enableIntegration;
        return this;
    }
}