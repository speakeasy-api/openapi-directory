package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteIdentitiesInput
 * Input to the <code>DeleteIdentities</code> action.
**/
public class DeleteIdentitiesInput {
    @JsonProperty("IdentityIdsToDelete")
    public String[] identityIdsToDelete;
    public DeleteIdentitiesInput withIdentityIdsToDelete(String[] identityIdsToDelete) {
        this.identityIdsToDelete = identityIdsToDelete;
        return this;
    }
}