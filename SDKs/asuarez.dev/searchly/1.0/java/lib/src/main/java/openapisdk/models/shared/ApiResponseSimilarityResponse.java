package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiResponseSimilarityResponse
 * Contains the response data if the request was successful.
**/
public class ApiResponseSimilarityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("similarity_list")
    public ApiResponseSimilarityResponseSimilarityList[] similarityList;
    public ApiResponseSimilarityResponse withSimilarityList(ApiResponseSimilarityResponseSimilarityList[] similarityList) {
        this.similarityList = similarityList;
        return this;
    }
}