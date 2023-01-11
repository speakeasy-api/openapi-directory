package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrderTypesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OrderTypesUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}