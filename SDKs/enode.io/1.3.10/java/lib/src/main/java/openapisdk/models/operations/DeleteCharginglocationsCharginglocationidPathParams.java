package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCharginglocationsCharginglocationidPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chargingLocationId")
    public String chargingLocationId;
    public DeleteCharginglocationsCharginglocationidPathParams withChargingLocationId(String chargingLocationId) {
        this.chargingLocationId = chargingLocationId;
        return this;
    }
}