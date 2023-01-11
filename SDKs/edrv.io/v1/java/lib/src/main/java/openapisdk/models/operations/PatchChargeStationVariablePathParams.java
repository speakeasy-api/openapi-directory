package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchChargeStationVariablePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchChargeStationVariablePathParams withId(String id) {
        this.id = id;
        return this;
    }
}