package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChargerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chargerId")
    public String chargerId;
    public GetChargerPathParams withChargerId(String chargerId) {
        this.chargerId = chargerId;
        return this;
    }
}