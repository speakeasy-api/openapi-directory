package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RegistrationConfig
 * The registration configuration.
**/
public class RegistrationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public RegistrationConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateBody")
    public String templateBody;
    public RegistrationConfig withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
}