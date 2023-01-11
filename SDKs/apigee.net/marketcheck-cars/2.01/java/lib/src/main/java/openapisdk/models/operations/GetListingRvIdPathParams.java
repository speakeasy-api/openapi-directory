package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingRvIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingRvIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}