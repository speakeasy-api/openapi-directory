package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Issuer
 * Details about the issuer of a license.
**/
public class Issuer {
    @JsonProperty("Name")
    public String name;
    public Issuer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SignKey")
    public String signKey;
    public Issuer withSignKey(String signKey) {
        this.signKey = signKey;
        return this;
    }
}