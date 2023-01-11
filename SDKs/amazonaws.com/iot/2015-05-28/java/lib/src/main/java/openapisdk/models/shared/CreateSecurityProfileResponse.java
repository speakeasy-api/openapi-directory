package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSecurityProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileArn")
    public String securityProfileArn;
    public CreateSecurityProfileResponse withSecurityProfileArn(String securityProfileArn) {
        this.securityProfileArn = securityProfileArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileName")
    public String securityProfileName;
    public CreateSecurityProfileResponse withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
}