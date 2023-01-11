package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword
 * Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
public class GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword {
    @JsonProperty("DeliveryMethod")
    public java.util.Map<String, Object> deliveryMethod;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword withDeliveryMethod(java.util.Map<String, Object> deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailSettings")
    public GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings emailSettings;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword withEmailSettings(GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings emailSettings) {
        this.emailSettings = emailSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsSettings")
    public GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings smsSettings;
    public GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword withSmsSettings(GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings smsSettings) {
        this.smsSettings = smsSettings;
        return this;
    }
}