package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetVehiclesVehicleidInformation200ApplicationJson
 * Descriptive information about the Vehicle
**/
public class GetVehiclesVehicleidInformation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public GetVehiclesVehicleidInformation200ApplicationJson withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetVehiclesVehicleidInformation200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GetVehiclesVehicleidInformation200ApplicationJson withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("year")
    public Long year;
    public GetVehiclesVehicleidInformation200ApplicationJson withYear(Long year) {
        this.year = year;
        return this;
    }
}