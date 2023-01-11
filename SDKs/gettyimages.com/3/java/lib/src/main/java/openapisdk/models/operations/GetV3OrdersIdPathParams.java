package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV3OrdersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetV3OrdersIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}