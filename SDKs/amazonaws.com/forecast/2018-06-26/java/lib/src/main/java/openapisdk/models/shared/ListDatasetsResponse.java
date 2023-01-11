package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatasetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Datasets")
    public DatasetSummary[] datasets;
    public ListDatasetsResponse withDatasets(DatasetSummary[] datasets) {
        this.datasets = datasets;
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