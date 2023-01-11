package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChargeStationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetChargeStationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}