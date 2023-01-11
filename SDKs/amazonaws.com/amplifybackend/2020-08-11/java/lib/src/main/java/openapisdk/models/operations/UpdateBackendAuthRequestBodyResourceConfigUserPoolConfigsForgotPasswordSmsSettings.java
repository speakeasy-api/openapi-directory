package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
 * The configuration for the SMS message sent when an Amplify app user forgets their password.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsMessage")
    public java.util.Map<String, Object> smsMessage;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings withSmsMessage(java.util.Map<String, Object> smsMessage) {
        this.smsMessage = smsMessage;
        return this;
    }
}