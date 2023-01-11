package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarFsboIdMediaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingCarFsboIdMediaPathParams withId(String id) {
        this.id = id;
        return this;
    }
}