package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetRiskConfigurationResponse {
    @JsonProperty("RiskConfiguration")
    public RiskConfigurationType riskConfiguration;
    public SetRiskConfigurationResponse withRiskConfiguration(RiskConfigurationType riskConfiguration) {
        this.riskConfiguration = riskConfiguration;
        return this;
    }
}