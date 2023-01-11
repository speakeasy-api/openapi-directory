package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingMotorcycleIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetListingMotorcycleIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}