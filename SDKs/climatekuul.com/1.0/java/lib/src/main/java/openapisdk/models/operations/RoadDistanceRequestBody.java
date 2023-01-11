package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoadDistanceRequestBody {
    @SpeakeasyMetadata("form:name=apiKey_l1")
    public String apiKeyL1;
    public RoadDistanceRequestBody withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKey_l2")
    public String apiKeyL2;
    public RoadDistanceRequestBody withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @SpeakeasyMetadata("form:name=travel_distance")
    public Integer travelDistance;
    public RoadDistanceRequestBody withTravelDistance(Integer travelDistance) {
        this.travelDistance = travelDistance;
        return this;
    }
    @SpeakeasyMetadata("form:name=trip_end")
    public Integer tripEnd;
    public RoadDistanceRequestBody withTripEnd(Integer tripEnd) {
        this.tripEnd = tripEnd;
        return this;
    }
    @SpeakeasyMetadata("form:name=trip_start")
    public Integer tripStart;
    public RoadDistanceRequestBody withTripStart(Integer tripStart) {
        this.tripStart = tripStart;
        return this;
    }
    @SpeakeasyMetadata("form:name=vehicle_make")
    public String vehicleMake;
    public RoadDistanceRequestBody withVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
        return this;
    }
    @SpeakeasyMetadata("form:name=vehicle_type")
    public String vehicleType;
    public RoadDistanceRequestBody withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
    @SpeakeasyMetadata("form:name=vehicle_year")
    public Integer vehicleYear;
    public RoadDistanceRequestBody withVehicleYear(Integer vehicleYear) {
        this.vehicleYear = vehicleYear;
        return this;
    }
}