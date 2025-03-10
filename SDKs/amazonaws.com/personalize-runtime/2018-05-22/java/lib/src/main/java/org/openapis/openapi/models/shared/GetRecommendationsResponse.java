/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetRecommendationsResponse - Success
 */
public class GetRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemList")
    public PredictedItem[] itemList;

    public GetRecommendationsResponse withItemList(PredictedItem[] itemList) {
        this.itemList = itemList;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationId")
    public String recommendationId;

    public GetRecommendationsResponse withRecommendationId(String recommendationId) {
        this.recommendationId = recommendationId;
        return this;
    }
    
    public GetRecommendationsResponse(){}
}
