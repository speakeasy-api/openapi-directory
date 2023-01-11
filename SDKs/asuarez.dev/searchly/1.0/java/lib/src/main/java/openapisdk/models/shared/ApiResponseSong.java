package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiResponseSong {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Boolean error;
    public ApiResponseSong withError(Boolean error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ApiResponseSong withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public ApiResponseSongResponse response;
    public ApiResponseSong withResponse(ApiResponseSongResponse response) {
        this.response = response;
        return this;
    }
}