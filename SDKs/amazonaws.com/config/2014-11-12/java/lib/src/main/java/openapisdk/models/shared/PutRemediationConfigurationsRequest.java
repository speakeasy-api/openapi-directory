package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutRemediationConfigurationsRequest {
    @JsonProperty("RemediationConfigurations")
    public RemediationConfiguration[] remediationConfigurations;
    public PutRemediationConfigurationsRequest withRemediationConfigurations(RemediationConfiguration[] remediationConfigurations) {
        this.remediationConfigurations = remediationConfigurations;
        return this;
    }
}