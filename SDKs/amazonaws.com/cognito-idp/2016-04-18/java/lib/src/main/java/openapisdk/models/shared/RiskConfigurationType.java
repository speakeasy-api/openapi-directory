package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RiskConfigurationType
 * The risk configuration type.
**/
public class RiskConfigurationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountTakeoverRiskConfiguration")
    public AccountTakeoverRiskConfigurationType accountTakeoverRiskConfiguration;
    public RiskConfigurationType withAccountTakeoverRiskConfiguration(AccountTakeoverRiskConfigurationType accountTakeoverRiskConfiguration) {
        this.accountTakeoverRiskConfiguration = accountTakeoverRiskConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientId")
    public String clientId;
    public RiskConfigurationType withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompromisedCredentialsRiskConfiguration")
    public CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfiguration;
    public RiskConfigurationType withCompromisedCredentialsRiskConfiguration(CompromisedCredentialsRiskConfigurationType compromisedCredentialsRiskConfiguration) {
        this.compromisedCredentialsRiskConfiguration = compromisedCredentialsRiskConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public RiskConfigurationType withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RiskExceptionConfiguration")
    public RiskExceptionConfigurationType riskExceptionConfiguration;
    public RiskConfigurationType withRiskExceptionConfiguration(RiskExceptionConfigurationType riskExceptionConfiguration) {
        this.riskExceptionConfiguration = riskExceptionConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public RiskConfigurationType withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}