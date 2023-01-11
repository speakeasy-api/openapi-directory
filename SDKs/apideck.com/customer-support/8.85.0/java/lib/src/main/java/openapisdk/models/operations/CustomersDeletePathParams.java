package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CustomersDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CustomersDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}