package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDealerPathParams withId(String id) {
        this.id = id;
        return this;
    }
}