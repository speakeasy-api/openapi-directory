package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountTakeoverRiskConfigurationType
 * Configuration for mitigation actions and notification for different levels of risk detected for a potential account takeover.
**/
public class AccountTakeoverRiskConfigurationType {
    @JsonProperty("Actions")
    public AccountTakeoverActionsType actions;
    public AccountTakeoverRiskConfigurationType withActions(AccountTakeoverActionsType actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotifyConfiguration")
    public NotifyConfigurationType notifyConfiguration;
    public AccountTakeoverRiskConfigurationType withNotifyConfiguration(NotifyConfigurationType notifyConfiguration) {
        this.notifyConfiguration = notifyConfiguration;
        return this;
    }
}