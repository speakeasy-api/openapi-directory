package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingHeavyEquipmentIdExtraPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingHeavyEquipmentIdExtraPathParams withId(String id) {
        this.id = id;
        return this;
    }
}