package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetRiskConfigurationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountTakeoverRiskConfiguration")
    public AccountTakeoverRiskConfigurationType accountTakeoverRiskConfiguration;
    public SetRiskConfigurationRequest withAccountTakeoverRiskConfiguration(AccountTakeoverRiskConfigurationType accountTakeoverRiskConfiguration) {
        this.accountTakeoverRiskConfiguration = accountTakeoverRiskConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public SetRiskConfigurationRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompromisedCredentialsRiskConfiguration")
    public CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfiguration;
    public SetRiskConfigurationRequest withCompromisedCredentialsRiskConfiguration(CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfiguration) {
        this.compromisedCredentialsRiskConfiguration = compromisedCredentialsRiskConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RiskExceptionConfiguration")
    public RiskExceptionConfigurationType riskExceptionConfiguration;
    public SetRiskConfigurationRequest withRiskExceptionConfiguration(RiskExceptionConfigurationType riskExceptionConfiguration) {
        this.riskExceptionConfiguration = riskExceptionConfiguration;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public SetRiskConfigurationRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}