package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutQueryDefinitionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryDefinitionId")
    public String queryDefinitionId;
    public PutQueryDefinitionResponse withQueryDefinitionId(String queryDefinitionId) {
        this.queryDefinitionId = queryDefinitionId;
        return this;
    }
}