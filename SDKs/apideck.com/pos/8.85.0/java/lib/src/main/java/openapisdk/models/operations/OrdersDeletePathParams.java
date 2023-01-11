package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OrdersDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}