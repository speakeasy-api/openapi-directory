package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
 * Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryMethod")
    public java.util.Map<String, Object> deliveryMethod;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword withDeliveryMethod(java.util.Map<String, Object> deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailSettings")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings emailSettings;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword withEmailSettings(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings emailSettings) {
        this.emailSettings = emailSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsSettings")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings smsSettings;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword withSmsSettings(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings smsSettings) {
        this.smsSettings = smsSettings;
        return this;
    }
}