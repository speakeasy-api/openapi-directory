package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiResponseSimilarity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Boolean error;
    public ApiResponseSimilarity withError(Boolean error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ApiResponseSimilarity withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public ApiResponseSimilarityResponse response;
    public ApiResponseSimilarity withResponse(ApiResponseSimilarityResponse response) {
        this.response = response;
        return this;
    }
}