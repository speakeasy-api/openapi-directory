package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListImportJobsResponse
 * An HTTP 200 response if the request succeeds, or an error message if the request fails.
**/
public class ListImportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImportJobs")
    public ImportJobSummary[] importJobs;
    public ListImportJobsResponse withImportJobs(ImportJobSummary[] importJobs) {
        this.importJobs = importJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListImportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}