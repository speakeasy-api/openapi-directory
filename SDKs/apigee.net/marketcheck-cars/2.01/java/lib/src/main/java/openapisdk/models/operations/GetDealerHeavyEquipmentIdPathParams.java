package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerHeavyEquipmentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDealerHeavyEquipmentIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}