package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateConnectionAliasRequest {
    @JsonProperty("AliasId")
    public String aliasId;
    public DisassociateConnectionAliasRequest withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
}