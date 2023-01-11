package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteQueryDefinitionRequest {
    @JsonProperty("queryDefinitionId")
    public String queryDefinitionId;
    public DeleteQueryDefinitionRequest withQueryDefinitionId(String queryDefinitionId) {
        this.queryDefinitionId = queryDefinitionId;
        return this;
    }
}