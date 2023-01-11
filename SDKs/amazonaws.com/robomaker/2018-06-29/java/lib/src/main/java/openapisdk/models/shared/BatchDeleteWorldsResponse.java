package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDeleteWorldsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unprocessedWorlds")
    public String[] unprocessedWorlds;
    public BatchDeleteWorldsResponse withUnprocessedWorlds(String[] unprocessedWorlds) {
        this.unprocessedWorlds = unprocessedWorlds;
        return this;
    }
}