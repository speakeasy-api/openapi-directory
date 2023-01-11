package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportJobsResponse
 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
**/
public class ExportJobsResponse {
    @JsonProperty("Item")
    public ExportJobResponse[] item;
    public ExportJobsResponse withItem(ExportJobResponse[] item) {
        this.item = item;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ExportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}