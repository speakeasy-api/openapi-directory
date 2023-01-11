package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingPathParams withId(String id) {
        this.id = id;
        return this;
    }
}