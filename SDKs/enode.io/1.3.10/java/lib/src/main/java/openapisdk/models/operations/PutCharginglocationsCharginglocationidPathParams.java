package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCharginglocationsCharginglocationidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chargingLocationId")
    public String chargingLocationId;
    public PutCharginglocationsCharginglocationidPathParams withChargingLocationId(String chargingLocationId) {
        this.chargingLocationId = chargingLocationId;
        return this;
    }
}