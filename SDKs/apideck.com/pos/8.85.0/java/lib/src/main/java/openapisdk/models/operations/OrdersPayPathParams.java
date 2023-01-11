package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersPayPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OrdersPayPathParams withId(String id) {
        this.id = id;
        return this;
    }
}