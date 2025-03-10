/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ScoreboardGameWeather {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public ScoreboardGameWeather withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temperature")
    public Double temperature;

    public ScoreboardGameWeather withTemperature(Double temperature) {
        this.temperature = temperature;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windDirection")
    public Double windDirection;

    public ScoreboardGameWeather withWindDirection(Double windDirection) {
        this.windDirection = windDirection;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windSpeed")
    public Double windSpeed;

    public ScoreboardGameWeather withWindSpeed(Double windSpeed) {
        this.windSpeed = windSpeed;
        return this;
    }
    
    public ScoreboardGameWeather(){}
}
