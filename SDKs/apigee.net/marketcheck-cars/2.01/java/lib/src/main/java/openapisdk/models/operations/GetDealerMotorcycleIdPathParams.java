package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerMotorcycleIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDealerMotorcycleIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}