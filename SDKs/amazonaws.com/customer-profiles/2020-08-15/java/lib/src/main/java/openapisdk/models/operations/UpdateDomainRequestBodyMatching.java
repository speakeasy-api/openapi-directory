package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDomainRequestBodyMatching
 * The flag that enables the matching process of duplicate profiles.
**/
public class UpdateDomainRequestBodyMatching {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public UpdateDomainRequestBodyMatching withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}