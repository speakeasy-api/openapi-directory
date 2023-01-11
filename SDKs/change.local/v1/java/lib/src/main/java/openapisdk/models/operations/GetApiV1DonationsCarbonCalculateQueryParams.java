package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1DonationsCarbonCalculateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=destination_address")
    public Double destinationAddress;
    public GetApiV1DonationsCarbonCalculateQueryParams withDestinationAddress(Double destinationAddress) {
        this.destinationAddress = destinationAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distance_mi")
    public Double distanceMi;
    public GetApiV1DonationsCarbonCalculateQueryParams withDistanceMi(Double distanceMi) {
        this.distanceMi = distanceMi;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=origin_address")
    public Double originAddress;
    public GetApiV1DonationsCarbonCalculateQueryParams withOriginAddress(Double originAddress) {
        this.originAddress = originAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transportation_method")
    public GetApiV1DonationsCarbonCalculateTransportationMethodEnum transportationMethod;
    public GetApiV1DonationsCarbonCalculateQueryParams withTransportationMethod(GetApiV1DonationsCarbonCalculateTransportationMethodEnum transportationMethod) {
        this.transportationMethod = transportationMethod;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weight_lb")
    public Double weightLb;
    public GetApiV1DonationsCarbonCalculateQueryParams withWeightLb(Double weightLb) {
        this.weightLb = weightLb;
        return this;
    }
}