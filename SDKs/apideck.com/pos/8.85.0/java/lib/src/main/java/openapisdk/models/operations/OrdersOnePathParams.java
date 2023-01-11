package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrdersOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OrdersOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}