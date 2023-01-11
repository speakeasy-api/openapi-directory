package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Mitigation
 * The mitigation applied to a DDoS attack.
**/
public class Mitigation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MitigationName")
    public String mitigationName;
    public Mitigation withMitigationName(String mitigationName) {
        this.mitigationName = mitigationName;
        return this;
    }
}