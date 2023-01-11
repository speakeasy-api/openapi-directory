package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetVehiclesVehicleidOdometer200ApplicationJson
 * Vehicle's odometer with timestamp
**/
public class GetVehiclesVehicleidOdometer200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Double distance;
    public GetVehiclesVehicleidOdometer200ApplicationJson withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public LocalDate lastUpdated;
    public GetVehiclesVehicleidOdometer200ApplicationJson withLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
}