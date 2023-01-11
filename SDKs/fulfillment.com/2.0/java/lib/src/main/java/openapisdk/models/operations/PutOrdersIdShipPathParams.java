package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrdersIdShipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PutOrdersIdShipPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}