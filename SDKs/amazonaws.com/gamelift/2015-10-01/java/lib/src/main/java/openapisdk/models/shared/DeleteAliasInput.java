package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeleteAliasInput
 * Represents the input for a request operation.
**/
public class DeleteAliasInput {
    @JsonProperty("AliasId")
    public String aliasId;
    public DeleteAliasInput withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
}