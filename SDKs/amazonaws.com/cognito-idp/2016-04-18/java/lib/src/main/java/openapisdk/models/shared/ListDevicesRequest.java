package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDevicesRequest
 * Represents the request to list the devices.
**/
public class ListDevicesRequest {
    @JsonProperty("AccessToken")
    public String accessToken;
    public ListDevicesRequest withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListDevicesRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public ListDevicesRequest withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}