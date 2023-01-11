package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAliasRequest {
    @JsonProperty("AliasName")
    public String aliasName;
    public DeleteAliasRequest withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
}