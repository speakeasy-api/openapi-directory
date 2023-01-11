package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUserImportJobsRequest
 * Represents the request to list the user import jobs.
**/
public class ListUserImportJobsRequest {
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListUserImportJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public ListUserImportJobsRequest withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public ListUserImportJobsRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}