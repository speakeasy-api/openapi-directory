package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatasetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetSummaries")
    public DatasetSummary[] datasetSummaries;
    public ListDatasetsResponse withDatasetSummaries(DatasetSummary[] datasetSummaries) {
        this.datasetSummaries = datasetSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDatasetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}