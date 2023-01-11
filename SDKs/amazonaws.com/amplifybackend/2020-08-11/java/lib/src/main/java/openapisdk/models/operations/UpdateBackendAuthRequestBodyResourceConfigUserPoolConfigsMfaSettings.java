package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
 * The settings of your MFA configuration for the backend of your Amplify project.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MfaTypes")
    public java.util.Map<String, Object> mfaTypes;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings withMfaTypes(java.util.Map<String, Object> mfaTypes) {
        this.mfaTypes = mfaTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsMessage")
    public java.util.Map<String, Object> smsMessage;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings withSmsMessage(java.util.Map<String, Object> smsMessage) {
        this.smsMessage = smsMessage;
        return this;
    }
}