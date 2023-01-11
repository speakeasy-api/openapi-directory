package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatasetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetNameBeginsWith")
    public String datasetNameBeginsWith;
    public ListDatasetsRequest withDatasetNameBeginsWith(String datasetNameBeginsWith) {
        this.datasetNameBeginsWith = datasetNameBeginsWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListDatasetsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDatasetsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}