package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorldGenerationJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListWorldGenerationJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("worldGenerationJobSummaries")
    public WorldGenerationJobSummary[] worldGenerationJobSummaries;
    public ListWorldGenerationJobsResponse withWorldGenerationJobSummaries(WorldGenerationJobSummary[] worldGenerationJobSummaries) {
        this.worldGenerationJobSummaries = worldGenerationJobSummaries;
        return this;
    }
}