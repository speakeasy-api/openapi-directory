package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DemodulationConfig
 * Information about the demodulation <code>Config</code>.
**/
public class DemodulationConfig {
    @JsonProperty("unvalidatedJSON")
    public String unvalidatedJSON;
    public DemodulationConfig withUnvalidatedJson(String unvalidatedJSON) {
        this.unvalidatedJSON = unvalidatedJSON;
        return this;
    }
}