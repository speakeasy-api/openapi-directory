/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutInsightSelectorsRequest {
    @JsonProperty("InsightSelectors")
    public InsightSelector[] insightSelectors;

    public PutInsightSelectorsRequest withInsightSelectors(InsightSelector[] insightSelectors) {
        this.insightSelectors = insightSelectors;
        return this;
    }
    
    @JsonProperty("TrailName")
    public String trailName;

    public PutInsightSelectorsRequest withTrailName(String trailName) {
        this.trailName = trailName;
        return this;
    }
    
    public PutInsightSelectorsRequest(@JsonProperty("InsightSelectors") InsightSelector[] insightSelectors, @JsonProperty("TrailName") String trailName) {
        this.insightSelectors = insightSelectors;
        this.trailName = trailName;
  }
}
