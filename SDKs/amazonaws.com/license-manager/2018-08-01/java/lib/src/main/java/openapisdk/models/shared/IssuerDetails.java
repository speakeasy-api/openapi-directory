package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssuerDetails
 * Details associated with the issuer of a license.
**/
public class IssuerDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyFingerprint")
    public String keyFingerprint;
    public IssuerDetails withKeyFingerprint(String keyFingerprint) {
        this.keyFingerprint = keyFingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public IssuerDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SignKey")
    public String signKey;
    public IssuerDetails withSignKey(String signKey) {
        this.signKey = signKey;
        return this;
    }
}