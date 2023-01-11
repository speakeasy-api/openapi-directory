package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EcommerceDeliveryRequestBody {
    @SpeakeasyMetadata("form:name=apiKey_l1")
    public String apiKeyL1;
    public EcommerceDeliveryRequestBody withApiKeyL1(String apiKeyL1) {
        this.apiKeyL1 = apiKeyL1;
        return this;
    }
    @SpeakeasyMetadata("form:name=apiKey_l2")
    public String apiKeyL2;
    public EcommerceDeliveryRequestBody withApiKeyL2(String apiKeyL2) {
        this.apiKeyL2 = apiKeyL2;
        return this;
    }
    @SpeakeasyMetadata("form:name=destination_airport_code")
    public String destinationAirportCode;
    public EcommerceDeliveryRequestBody withDestinationAirportCode(String destinationAirportCode) {
        this.destinationAirportCode = destinationAirportCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=destination_latitude")
    public Double destinationLatitude;
    public EcommerceDeliveryRequestBody withDestinationLatitude(Double destinationLatitude) {
        this.destinationLatitude = destinationLatitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=destination_longitude")
    public Double destinationLongitude;
    public EcommerceDeliveryRequestBody withDestinationLongitude(Double destinationLongitude) {
        this.destinationLongitude = destinationLongitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=origin_airport_code")
    public String originAirportCode;
    public EcommerceDeliveryRequestBody withOriginAirportCode(String originAirportCode) {
        this.originAirportCode = originAirportCode;
        return this;
    }
    @SpeakeasyMetadata("form:name=origin_latitude")
    public Double originLatitude;
    public EcommerceDeliveryRequestBody withOriginLatitude(Double originLatitude) {
        this.originLatitude = originLatitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=origin_longitude")
    public Double originLongitude;
    public EcommerceDeliveryRequestBody withOriginLongitude(Double originLongitude) {
        this.originLongitude = originLongitude;
        return this;
    }
    @SpeakeasyMetadata("form:name=volumetric_weight")
    public Double volumetricWeight;
    public EcommerceDeliveryRequestBody withVolumetricWeight(Double volumetricWeight) {
        this.volumetricWeight = volumetricWeight;
        return this;
    }
    @SpeakeasyMetadata("form:name=waybill_type")
    public String waybillType;
    public EcommerceDeliveryRequestBody withWaybillType(String waybillType) {
        this.waybillType = waybillType;
        return this;
    }
}