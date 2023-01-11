package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCaCertificateRequestBodyRegistrationConfig
 * The registration configuration.
**/
public class UpdateCaCertificateRequestBodyRegistrationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateCaCertificateRequestBodyRegistrationConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateBody")
    public String templateBody;
    public UpdateCaCertificateRequestBodyRegistrationConfig withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
}