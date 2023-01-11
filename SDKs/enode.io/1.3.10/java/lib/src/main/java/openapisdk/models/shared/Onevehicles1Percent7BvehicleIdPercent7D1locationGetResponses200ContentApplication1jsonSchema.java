package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema
 * Vehicle's GPS coordinates with timestamp
**/
public class Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public LocalDate lastUpdated;
    public Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema withLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}