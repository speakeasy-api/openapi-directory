package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetVehicleSeenVehicleSeenGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=afterDate")
    public LocalDate afterDate;
    public GetVehicleSeenVehicleSeenGetQueryParams withAfterDate(LocalDate afterDate) {
        this.afterDate = afterDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jwt")
    public String jwt;
    public GetVehicleSeenVehicleSeenGetQueryParams withJwt(String jwt) {
        this.jwt = jwt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vin")
    public String vin;
    public GetVehicleSeenVehicleSeenGetQueryParams withVin(String vin) {
        this.vin = vin;
        return this;
    }
}