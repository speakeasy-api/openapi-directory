package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ControlChargerChargingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chargerId")
    public String chargerId;
    public ControlChargerChargingPathParams withChargerId(String chargerId) {
        this.chargerId = chargerId;
        return this;
    }
}