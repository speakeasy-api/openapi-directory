package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDataIngestionJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetName")
    public String datasetName;
    public ListDataIngestionJobsRequest withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListDataIngestionJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDataIngestionJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public IngestionJobStatusEnum status;
    public ListDataIngestionJobsRequest withStatus(IngestionJobStatusEnum status) {
        this.status = status;
        return this;
    }
}