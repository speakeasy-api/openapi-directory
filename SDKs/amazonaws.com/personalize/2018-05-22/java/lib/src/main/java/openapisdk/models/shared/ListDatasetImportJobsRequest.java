package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatasetImportJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetArn")
    public String datasetArn;
    public ListDatasetImportJobsRequest withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListDatasetImportJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDatasetImportJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}