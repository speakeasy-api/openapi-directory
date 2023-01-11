package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingHeavyEquipmentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingHeavyEquipmentIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}