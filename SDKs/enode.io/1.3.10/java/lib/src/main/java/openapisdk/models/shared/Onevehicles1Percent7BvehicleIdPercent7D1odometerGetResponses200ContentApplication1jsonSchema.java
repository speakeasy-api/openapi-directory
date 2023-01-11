package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema
 * Vehicle's odometer with timestamp
**/
public class Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Double distance;
    public Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public LocalDate lastUpdated;
    public Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema withLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
}