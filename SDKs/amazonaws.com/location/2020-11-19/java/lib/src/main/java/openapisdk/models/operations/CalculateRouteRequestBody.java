package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CalculateRouteRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CarModeOptions")
    public CalculateRouteRequestBodyCarModeOptions carModeOptions;
    public CalculateRouteRequestBody withCarModeOptions(CalculateRouteRequestBodyCarModeOptions carModeOptions) {
        this.carModeOptions = carModeOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DepartNow")
    public Boolean departNow;
    public CalculateRouteRequestBody withDepartNow(Boolean departNow) {
        this.departNow = departNow;
        return this;
    }
    @JsonProperty("DeparturePosition")
    public Double[] departurePosition;
    public CalculateRouteRequestBody withDeparturePosition(Double[] departurePosition) {
        this.departurePosition = departurePosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("DepartureTime")
    public OffsetDateTime departureTime;
    public CalculateRouteRequestBody withDepartureTime(OffsetDateTime departureTime) {
        this.departureTime = departureTime;
        return this;
    }
    @JsonProperty("DestinationPosition")
    public Double[] destinationPosition;
    public CalculateRouteRequestBody withDestinationPosition(Double[] destinationPosition) {
        this.destinationPosition = destinationPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DistanceUnit")
    public CalculateRouteRequestBodyDistanceUnitEnum distanceUnit;
    public CalculateRouteRequestBody withDistanceUnit(CalculateRouteRequestBodyDistanceUnitEnum distanceUnit) {
        this.distanceUnit = distanceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeLegGeometry")
    public Boolean includeLegGeometry;
    public CalculateRouteRequestBody withIncludeLegGeometry(Boolean includeLegGeometry) {
        this.includeLegGeometry = includeLegGeometry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TravelMode")
    public CalculateRouteRequestBodyTravelModeEnum travelMode;
    public CalculateRouteRequestBody withTravelMode(CalculateRouteRequestBodyTravelModeEnum travelMode) {
        this.travelMode = travelMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TruckModeOptions")
    public CalculateRouteRequestBodyTruckModeOptions truckModeOptions;
    public CalculateRouteRequestBody withTruckModeOptions(CalculateRouteRequestBodyTruckModeOptions truckModeOptions) {
        this.truckModeOptions = truckModeOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WaypointPositions")
    public Double[][] waypointPositions;
    public CalculateRouteRequestBody withWaypointPositions(Double[][] waypointPositions) {
        this.waypointPositions = waypointPositions;
        return this;
    }
}