package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
**/
public class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MfaTypes")
    public java.util.Map<String, Object> mfaTypes;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings withMfaTypes(java.util.Map<String, Object> mfaTypes) {
        this.mfaTypes = mfaTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsMessage")
    public java.util.Map<String, Object> smsMessage;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings withSmsMessage(java.util.Map<String, Object> smsMessage) {
        this.smsMessage = smsMessage;
        return this;
    }
}