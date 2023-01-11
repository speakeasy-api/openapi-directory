package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchDeleteWorldsRequestBody {
    @JsonProperty("worlds")
    public String[] worlds;
    public BatchDeleteWorldsRequestBody withWorlds(String[] worlds) {
        this.worlds = worlds;
        return this;
    }
}