/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword - &lt;b&gt;(DEPRECATED)&lt;/b&gt; Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
 */
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeliveryMethod")
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum deliveryMethod;

    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword withDeliveryMethod(UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum deliveryMethod) {
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
    
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword(){}
}
