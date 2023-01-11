package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountTakeoverActionsType
 * Account takeover actions type.
**/
public class AccountTakeoverActionsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HighAction")
    public AccountTakeoverActionType highAction;
    public AccountTakeoverActionsType withHighAction(AccountTakeoverActionType highAction) {
        this.highAction = highAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LowAction")
    public AccountTakeoverActionType lowAction;
    public AccountTakeoverActionsType withLowAction(AccountTakeoverActionType lowAction) {
        this.lowAction = lowAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MediumAction")
    public AccountTakeoverActionType mediumAction;
    public AccountTakeoverActionsType withMediumAction(AccountTakeoverActionType mediumAction) {
        this.mediumAction = mediumAction;
        return this;
    }
}