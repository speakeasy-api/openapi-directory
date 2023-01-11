package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DecodeConfig
 * Information about the decode <code>Config</code>.
**/
public class DecodeConfig {
    @JsonProperty("unvalidatedJSON")
    public String unvalidatedJSON;
    public DecodeConfig withUnvalidatedJson(String unvalidatedJSON) {
        this.unvalidatedJSON = unvalidatedJSON;
        return this;
    }
}