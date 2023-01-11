package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDomainRequestBodyMatching
 * The flag that enables the matching process of duplicate profiles.
**/
public class CreateDomainRequestBodyMatching {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enabled")
    public Boolean enabled;
    public CreateDomainRequestBodyMatching withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}