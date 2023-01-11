package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
 * The configuration for the email sent when an app user forgets their password.
**/
public class CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailMessage")
    public java.util.Map<String, Object> emailMessage;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings withEmailMessage(java.util.Map<String, Object> emailMessage) {
        this.emailMessage = emailMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailSubject")
    public java.util.Map<String, Object> emailSubject;
    public CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings withEmailSubject(java.util.Map<String, Object> emailSubject) {
        this.emailSubject = emailSubject;
        return this;
    }
}