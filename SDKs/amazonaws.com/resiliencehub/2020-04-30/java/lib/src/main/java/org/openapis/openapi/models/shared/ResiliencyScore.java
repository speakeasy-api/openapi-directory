/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResiliencyScore - The overall resiliency score, returned as an object that includes the disruption score and outage score.
 */
public class ResiliencyScore {
    @JsonProperty("disruptionScore")
    public java.util.Map<String, Double> disruptionScore;

    public ResiliencyScore withDisruptionScore(java.util.Map<String, Double> disruptionScore) {
        this.disruptionScore = disruptionScore;
        return this;
    }
    
    @JsonProperty("score")
    public Double score;

    public ResiliencyScore withScore(Double score) {
        this.score = score;
        return this;
    }
    
    public ResiliencyScore(@JsonProperty("disruptionScore") java.util.Map<String, Double> disruptionScore, @JsonProperty("score") Double score) {
        this.disruptionScore = disruptionScore;
        this.score = score;
  }
}
