package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteChargeStationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteChargeStationPathParams withId(String id) {
        this.id = id;
        return this;
    }
}