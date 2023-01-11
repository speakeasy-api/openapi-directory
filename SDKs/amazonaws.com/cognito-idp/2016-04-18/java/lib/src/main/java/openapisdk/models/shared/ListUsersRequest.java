package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListUsersRequest
 * Represents the request to list users.
**/
public class ListUsersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesToGet")
    public String[] attributesToGet;
    public ListUsersRequest withAttributesToGet(String[] attributesToGet) {
        this.attributesToGet = attributesToGet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public String filter;
    public ListUsersRequest withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListUsersRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public ListUsersRequest withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public ListUsersRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}