package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityPoolShortDescription
 * A description of the identity pool.
**/
public class IdentityPoolShortDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public IdentityPoolShortDescription withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolName")
    public String identityPoolName;
    public IdentityPoolShortDescription withIdentityPoolName(String identityPoolName) {
        this.identityPoolName = identityPoolName;
        return this;
    }
}