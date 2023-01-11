package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChargeStationConnectorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetChargeStationConnectorsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}