package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LineItemsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LineItemsUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}