package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingRvIdExtraPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingRvIdExtraPathParams withId(String id) {
        this.id = id;
        return this;
    }
}