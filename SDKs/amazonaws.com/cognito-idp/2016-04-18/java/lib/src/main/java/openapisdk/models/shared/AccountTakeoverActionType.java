package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountTakeoverActionType
 * Account takeover action type.
**/
public class AccountTakeoverActionType {
    @JsonProperty("EventAction")
    public AccountTakeoverEventActionTypeEnum eventAction;
    public AccountTakeoverActionType withEventAction(AccountTakeoverEventActionTypeEnum eventAction) {
        this.eventAction = eventAction;
        return this;
    }
    @JsonProperty("Notify")
    public Boolean notify;
    public AccountTakeoverActionType withNotify(Boolean notify) {
        this.notify = notify;
        return this;
    }
}