package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
 * The configuration for the SMS message sent when an app user forgets their password.
**/
public class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsMessage")
    public java.util.Map<String, Object> smsMessage;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings withSmsMessage(java.util.Map<String, Object> smsMessage) {
        this.smsMessage = smsMessage;
        return this;
    }
}