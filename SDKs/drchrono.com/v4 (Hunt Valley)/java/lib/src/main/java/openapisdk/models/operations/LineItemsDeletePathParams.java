package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LineItemsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LineItemsDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}