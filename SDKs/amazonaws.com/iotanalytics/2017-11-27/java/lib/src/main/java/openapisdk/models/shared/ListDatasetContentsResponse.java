package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatasetContentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetContentSummaries")
    public DatasetContentSummary[] datasetContentSummaries;
    public ListDatasetContentsResponse withDatasetContentSummaries(DatasetContentSummary[] datasetContentSummaries) {
        this.datasetContentSummaries = datasetContentSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDatasetContentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}