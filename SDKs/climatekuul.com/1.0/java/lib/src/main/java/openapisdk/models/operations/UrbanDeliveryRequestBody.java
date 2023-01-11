package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UrbanDeliveryRequestBody {
    @SpeakeasyMetadata("form:name=apiKey_l1")
    public String apiKeyL1;
    public UrbanDeliveryRequestBody withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKey_l2")
    public String apiKeyL2;
    public UrbanDeliveryRequestBody withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @SpeakeasyMetadata("form:name=destination_latitude")
    public Double destinationLatitude;
    public UrbanDeliveryRequestBody withDestinationLatitude(Double destinationLatitude) {
        this.destinationLatitude = destinationLatitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=destination_longitude")
    public Double destinationLongitude;
    public UrbanDeliveryRequestBody withDestinationLongitude(Double destinationLongitude) {
        this.destinationLongitude = destinationLongitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=item_count")
    public Integer itemCount;
    public UrbanDeliveryRequestBody withItemCount(Integer itemCount) {
        this.itemCount = itemCount;
        return this;
    }
    @SpeakeasyMetadata("form:name=origin_latitude")
    public Double originLatitude;
    public UrbanDeliveryRequestBody withOriginLatitude(Double originLatitude) {
        this.originLatitude = originLatitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=origin_longitude")
    public Double originLongitude;
    public UrbanDeliveryRequestBody withOriginLongitude(Double originLongitude) {
        this.originLongitude = originLongitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=vehicle_type")
    public String vehicleType;
    public UrbanDeliveryRequestBody withVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
        return this;
    }
}