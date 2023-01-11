package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatastoresResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreSummaries")
    public DatastoreSummary[] datastoreSummaries;
    public ListDatastoresResponse withDatastoreSummaries(DatastoreSummary[] datastoreSummaries) {
        this.datastoreSummaries = datastoreSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDatastoresResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}