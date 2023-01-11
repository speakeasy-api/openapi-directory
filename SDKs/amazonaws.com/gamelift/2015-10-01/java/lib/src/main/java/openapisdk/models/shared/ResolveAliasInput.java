package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResolveAliasInput
 * Represents the input for a request operation.
**/
public class ResolveAliasInput {
    @JsonProperty("AliasId")
    public String aliasId;
    public ResolveAliasInput withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
}