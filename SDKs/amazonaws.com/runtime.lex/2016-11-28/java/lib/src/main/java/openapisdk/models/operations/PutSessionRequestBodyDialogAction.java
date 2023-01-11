package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutSessionRequestBodyDialogAction
 * Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state.
**/
public class PutSessionRequestBodyDialogAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillmentState")
    public openapisdk.models.shared.FulfillmentStateEnum fulfillmentState;
    public PutSessionRequestBodyDialogAction withFulfillmentState(openapisdk.models.shared.FulfillmentStateEnum fulfillmentState) {
        this.fulfillmentState = fulfillmentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intentName")
    public String intentName;
    public PutSessionRequestBodyDialogAction withIntentName(String intentName) {
        this.intentName = intentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public PutSessionRequestBodyDialogAction withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageFormat")
    public openapisdk.models.shared.MessageFormatTypeEnum messageFormat;
    public PutSessionRequestBodyDialogAction withMessageFormat(openapisdk.models.shared.MessageFormatTypeEnum messageFormat) {
        this.messageFormat = messageFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotToElicit")
    public String slotToElicit;
    public PutSessionRequestBodyDialogAction withSlotToElicit(String slotToElicit) {
        this.slotToElicit = slotToElicit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slots")
    public java.util.Map<String, String> slots;
    public PutSessionRequestBodyDialogAction withSlots(java.util.Map<String, String> slots) {
        this.slots = slots;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public openapisdk.models.shared.DialogActionTypeEnum type;
    public PutSessionRequestBodyDialogAction withType(openapisdk.models.shared.DialogActionTypeEnum type) {
        this.type = type;
        return this;
    }
}