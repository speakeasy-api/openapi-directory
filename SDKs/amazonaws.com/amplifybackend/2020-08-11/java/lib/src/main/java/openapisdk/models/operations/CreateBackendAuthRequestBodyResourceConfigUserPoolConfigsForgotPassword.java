package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
 * Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
**/
public class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword {
    @JsonProperty("DeliveryMethod")
    public java.util.Map<String, Object> deliveryMethod;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword withDeliveryMethod(java.util.Map<String, Object> deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailSettings")
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings emailSettings;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword withEmailSettings(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings emailSettings) {
        this.emailSettings = emailSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsSettings")
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings smsSettings;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword withSmsSettings(CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings smsSettings) {
        this.smsSettings = smsSettings;
        return this;
    }
}