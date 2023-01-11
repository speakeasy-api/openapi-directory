package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCharginglocationsCharginglocationidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chargingLocationId")
    public String chargingLocationId;
    public GetCharginglocationsCharginglocationidPathParams withChargingLocationId(String chargingLocationId) {
        this.chargingLocationId = chargingLocationId;
        return this;
    }
}