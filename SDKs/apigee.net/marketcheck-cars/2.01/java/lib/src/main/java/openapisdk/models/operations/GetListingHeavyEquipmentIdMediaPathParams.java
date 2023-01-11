package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingHeavyEquipmentIdMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingHeavyEquipmentIdMediaPathParams withId(String id) {
        this.id = id;
        return this;
    }
}