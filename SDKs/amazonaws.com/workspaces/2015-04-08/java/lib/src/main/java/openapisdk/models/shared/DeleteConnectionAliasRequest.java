package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteConnectionAliasRequest {
    @JsonProperty("AliasId")
    public String aliasId;
    public DeleteConnectionAliasRequest withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
}