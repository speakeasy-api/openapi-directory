package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateConfigurationSetRequestBodySendingOptions
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
**/
public class CreateConfigurationSetRequestBodySendingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SendingEnabled")
    public Boolean sendingEnabled;
    public CreateConfigurationSetRequestBodySendingOptions withSendingEnabled(Boolean sendingEnabled) {
        this.sendingEnabled = sendingEnabled;
        return this;
    }
}