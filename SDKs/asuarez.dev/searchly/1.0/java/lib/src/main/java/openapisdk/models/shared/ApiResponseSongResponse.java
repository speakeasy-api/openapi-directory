package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiResponseSongResponse
 * Contains the response data if the request was successful.
**/
public class ApiResponseSongResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public ApiResponseSongResponseResults[] results;
    public ApiResponseSongResponse withResults(ApiResponseSongResponseResults[] results) {
        this.results = results;
        return this;
    }
}