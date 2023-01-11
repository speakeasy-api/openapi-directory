package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHistory2VehicleHistoryGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetHistory2VehicleHistoryGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public GetHistory2VehicleHistoryGetQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}