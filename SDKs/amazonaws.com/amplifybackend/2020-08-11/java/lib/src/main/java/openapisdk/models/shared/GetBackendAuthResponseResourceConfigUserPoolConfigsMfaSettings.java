package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings
 * Describes the configuration settings and methods for your Amplify app users to use MFA.
**/
public class GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MfaTypes")
    public java.util.Map<String, Object> mfaTypes;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings withMfaTypes(java.util.Map<String, Object> mfaTypes) {
        this.mfaTypes = mfaTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsMessage")
    public java.util.Map<String, Object> smsMessage;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings withSmsMessage(java.util.Map<String, Object> smsMessage) {
        this.smsMessage = smsMessage;
        return this;
    }
}