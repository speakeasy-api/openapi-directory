package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarFsboIdExtraPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingCarFsboIdExtraPathParams withId(String id) {
        this.id = id;
        return this;
    }
}