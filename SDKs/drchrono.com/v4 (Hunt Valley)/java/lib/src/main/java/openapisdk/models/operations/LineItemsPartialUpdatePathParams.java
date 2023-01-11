package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LineItemsPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LineItemsPartialUpdatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}