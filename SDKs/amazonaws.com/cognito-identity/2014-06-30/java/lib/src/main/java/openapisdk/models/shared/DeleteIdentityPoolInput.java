package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteIdentityPoolInput
 * Input to the DeleteIdentityPool action.
**/
public class DeleteIdentityPoolInput {
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public DeleteIdentityPoolInput withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}