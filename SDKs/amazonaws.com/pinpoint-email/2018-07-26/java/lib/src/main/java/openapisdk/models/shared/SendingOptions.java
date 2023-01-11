package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendingOptions
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
**/
public class SendingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingEnabled")
    public Boolean sendingEnabled;
    public SendingOptions withSendingEnabled(Boolean sendingEnabled) {
        this.sendingEnabled = sendingEnabled;
        return this;
    }
}