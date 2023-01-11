package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectionAliasResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AliasId")
    public String aliasId;
    public CreateConnectionAliasResult withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
}