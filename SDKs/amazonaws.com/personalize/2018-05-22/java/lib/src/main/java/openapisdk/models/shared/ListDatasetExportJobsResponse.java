package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDatasetExportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetExportJobs")
    public DatasetExportJobSummary[] datasetExportJobs;
    public ListDatasetExportJobsResponse withDatasetExportJobs(DatasetExportJobSummary[] datasetExportJobs) {
        this.datasetExportJobs = datasetExportJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDatasetExportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}