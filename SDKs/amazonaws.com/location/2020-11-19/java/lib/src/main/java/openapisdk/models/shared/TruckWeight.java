package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TruckWeight
 * Contains details about the truck's weight specifications. Used to avoid roads that can't support or allow the total weight for requests that specify <code>TravelMode</code> as <code>Truck</code>.
**/
public class TruckWeight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Total")
    public Double total;
    public TruckWeight withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unit")
    public VehicleWeightUnitEnum unit;
    public TruckWeight withUnit(VehicleWeightUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}