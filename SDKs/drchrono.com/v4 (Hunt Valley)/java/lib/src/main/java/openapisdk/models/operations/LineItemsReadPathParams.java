package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LineItemsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public LineItemsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}