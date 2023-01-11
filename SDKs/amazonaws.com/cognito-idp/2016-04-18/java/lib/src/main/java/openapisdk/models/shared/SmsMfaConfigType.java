package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SmsMfaConfigType
 * The SMS text message multi-factor authentication (MFA) configuration type.
**/
public class SmsMfaConfigType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsAuthenticationMessage")
    public String smsAuthenticationMessage;
    public SmsMfaConfigType withSmsAuthenticationMessage(String smsAuthenticationMessage) {
        this.smsAuthenticationMessage = smsAuthenticationMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsConfiguration")
    public SmsConfigurationType smsConfiguration;
    public SmsMfaConfigType withSmsConfiguration(SmsConfigurationType smsConfiguration) {
        this.smsConfiguration = smsConfiguration;
        return this;
    }
}