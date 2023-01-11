package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetIdentityPoolRolesInput
 * Input to the <code>GetIdentityPoolRoles</code> action.
**/
public class GetIdentityPoolRolesInput {
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public GetIdentityPoolRolesInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}