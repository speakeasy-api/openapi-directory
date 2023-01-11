package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListWorldExportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListWorldExportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("worldExportJobSummaries")
    public WorldExportJobSummary[] worldExportJobSummaries;
    public ListWorldExportJobsResponse withWorldExportJobSummaries(WorldExportJobSummary[] worldExportJobSummaries) {
        this.worldExportJobSummaries = worldExportJobSummaries;
        return this;
    }
}