package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDealerRvIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetDealerRvIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}