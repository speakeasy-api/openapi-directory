package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetVehiclesVehicleidLocation200ApplicationJson
 * Vehicle's GPS coordinates with timestamp
**/
public class GetVehiclesVehicleidLocation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public LocalDate lastUpdated;
    public GetVehiclesVehicleidLocation200ApplicationJson withLastUpdated(LocalDate lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public GetVehiclesVehicleidLocation200ApplicationJson withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public GetVehiclesVehicleidLocation200ApplicationJson withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
}