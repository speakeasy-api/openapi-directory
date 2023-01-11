package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Principal
 * Information about a principal.
**/
public class Principal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalARN")
    public String principalARN;
    public Principal withPrincipalArn(String principalARN) {
        this.principalARN = principalARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrincipalType")
    public PrincipalTypeEnum principalType;
    public Principal withPrincipalType(PrincipalTypeEnum principalType) {
        this.principalType = principalType;
        return this;
    }
}