package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
 * The configuration for the email sent when an app user forgets their password.
**/
public class UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailMessage")
    public java.util.Map<String, Object> emailMessage;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings withEmailMessage(java.util.Map<String, Object> emailMessage) {
        this.emailMessage = emailMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailSubject")
    public java.util.Map<String, Object> emailSubject;
    public UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings withEmailSubject(java.util.Map<String, Object> emailSubject) {
        this.emailSubject = emailSubject;
        return this;
    }
}