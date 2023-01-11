package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatasetImportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetImportJobs")
    public DatasetImportJobSummary[] datasetImportJobs;
    public ListDatasetImportJobsResponse withDatasetImportJobs(DatasetImportJobSummary[] datasetImportJobs) {
        this.datasetImportJobs = datasetImportJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDatasetImportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}