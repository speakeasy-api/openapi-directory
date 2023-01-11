package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceDefinitionIdRequestBody {
    @JsonProperty("sourceDefinitionId")
    public String sourceDefinitionId;
    public SourceDefinitionIdRequestBody withSourceDefinitionId(String sourceDefinitionId) {
        this.sourceDefinitionId = sourceDefinitionId;
        return this;
    }
}