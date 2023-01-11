package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActionHistoryDetails
 *  The description of details of the event. 
**/
public class ActionHistoryDetails {
    @JsonProperty("Action")
    public Action action;
    public ActionHistoryDetails withAction(Action action) {
        this.action = action;
        return this;
    }
    @JsonProperty("Message")
    public String message;
    public ActionHistoryDetails withMessage(String message) {
        this.message = message;
        return this;
    }
}