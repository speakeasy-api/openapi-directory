package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDataIngestionJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataIngestionJobSummaries")
    public DataIngestionJobSummary[] dataIngestionJobSummaries;
    public ListDataIngestionJobsResponse withDataIngestionJobSummaries(DataIngestionJobSummary[] dataIngestionJobSummaries) {
        this.dataIngestionJobSummaries = dataIngestionJobSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDataIngestionJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}