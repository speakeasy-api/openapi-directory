package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AirtravelCoordinatesRequestBody {
    @SpeakeasyMetadata("form:name=apiKey_l1")
    public String apiKeyL1;
    public AirtravelCoordinatesRequestBody withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKey_l2")
    public String apiKeyL2;
    public AirtravelCoordinatesRequestBody withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @SpeakeasyMetadata("form:name=destination_airport_latitude")
    public Double destinationAirportLatitude;
    public AirtravelCoordinatesRequestBody withDestinationAirportLatitude(Double destinationAirportLatitude) {
        this.destinationAirportLatitude = destinationAirportLatitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=destination_airport_longitude")
    public Double destinationAirportLongitude;
    public AirtravelCoordinatesRequestBody withDestinationAirportLongitude(Double destinationAirportLongitude) {
        this.destinationAirportLongitude = destinationAirportLongitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=number_of_passengers")
    public Integer numberOfPassengers;
    public AirtravelCoordinatesRequestBody withNumberOfPassengers(Integer numberOfPassengers) {
        this.numberOfPassengers = numberOfPassengers;
        return this;
    }
    @SpeakeasyMetadata("form:name=origin_airport_latitude")
    public Double originAirportLatitude;
    public AirtravelCoordinatesRequestBody withOriginAirportLatitude(Double originAirportLatitude) {
        this.originAirportLatitude = originAirportLatitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=origin_airport_longitude")
    public Double originAirportLongitude;
    public AirtravelCoordinatesRequestBody withOriginAirportLongitude(Double originAirportLongitude) {
        this.originAirportLongitude = originAirportLongitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=travel_class")
    public String travelClass;
    public AirtravelCoordinatesRequestBody withTravelClass(String travelClass) {
        this.travelClass = travelClass;
        return this;
    }
    @SpeakeasyMetadata("form:name=travel_mode")
    public String travelMode;
    public AirtravelCoordinatesRequestBody withTravelMode(String travelMode) {
        this.travelMode = travelMode;
        return this;
    }
}