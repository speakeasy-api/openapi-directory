package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegisterCaCertificateRequestBodyRegistrationConfig
 * The registration configuration.
**/
public class RegisterCaCertificateRequestBodyRegistrationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public RegisterCaCertificateRequestBodyRegistrationConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateBody")
    public String templateBody;
    public RegisterCaCertificateRequestBodyRegistrationConfig withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
}