package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportJobsResponse
 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
**/
public class ImportJobsResponse {
    @JsonProperty("Item")
    public ImportJobResponse[] item;
    public ImportJobsResponse withItem(ImportJobResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ImportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}