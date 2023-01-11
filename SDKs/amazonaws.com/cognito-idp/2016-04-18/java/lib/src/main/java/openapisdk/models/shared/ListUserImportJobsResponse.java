package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUserImportJobsResponse
 * Represents the response from the server to the request to list the user import jobs.
**/
public class ListUserImportJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public ListUserImportJobsResponse withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserImportJobs")
    public UserImportJobType[] userImportJobs;
    public ListUserImportJobsResponse withUserImportJobs(UserImportJobType[] userImportJobs) {
        this.userImportJobs = userImportJobs;
        return this;
    }
}