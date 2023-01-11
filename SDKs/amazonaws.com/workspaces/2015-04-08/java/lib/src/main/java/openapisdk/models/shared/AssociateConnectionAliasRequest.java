package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateConnectionAliasRequest {
    @JsonProperty("AliasId")
    public String aliasId;
    public AssociateConnectionAliasRequest withAliasId(String aliasId) {
        this.aliasId = aliasId;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public AssociateConnectionAliasRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
}