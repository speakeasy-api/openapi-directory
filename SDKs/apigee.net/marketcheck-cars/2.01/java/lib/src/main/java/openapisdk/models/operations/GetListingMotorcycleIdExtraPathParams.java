package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingMotorcycleIdExtraPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingMotorcycleIdExtraPathParams withId(String id) {
        this.id = id;
        return this;
    }
}