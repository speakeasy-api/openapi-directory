package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareTokenMfaConfigType
 * The type used for enabling software token MFA at the user pool level.
**/
public class SoftwareTokenMfaConfigType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public SoftwareTokenMfaConfigType withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}