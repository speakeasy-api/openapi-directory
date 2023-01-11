package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomersOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CustomersOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}