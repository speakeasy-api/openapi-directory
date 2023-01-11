package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeRiskConfigurationResponse {
    @JsonProperty("RiskConfiguration")
    public RiskConfigurationType riskConfiguration;
    public DescribeRiskConfigurationResponse withRiskConfiguration(RiskConfigurationType riskConfiguration) {
        this.riskConfiguration = riskConfiguration;
        return this;
    }
}