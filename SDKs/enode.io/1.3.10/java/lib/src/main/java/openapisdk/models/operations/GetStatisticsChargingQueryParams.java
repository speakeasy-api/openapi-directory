package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetStatisticsChargingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=chargingLocationId")
    public String chargingLocationId;
    public GetStatisticsChargingQueryParams withChargingLocationId(String chargingLocationId) {
        this.chargingLocationId = chargingLocationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endDate")
    public LocalDate endDate;
    public GetStatisticsChargingQueryParams withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public GetStatisticsChargingResolutionEnum resolution;
    public GetStatisticsChargingQueryParams withResolution(GetStatisticsChargingResolutionEnum resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startDate")
    public LocalDate startDate;
    public GetStatisticsChargingQueryParams withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicleId")
    public String vehicleId;
    public GetStatisticsChargingQueryParams withVehicleId(String vehicleId) {
        this.vehicleId = vehicleId;
        return this;
    }
}