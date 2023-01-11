package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminListDevicesRequest
 * Represents the request to list devices, as an administrator.
**/
public class AdminListDevicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public AdminListDevicesRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public AdminListDevicesRequest withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminListDevicesRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminListDevicesRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}