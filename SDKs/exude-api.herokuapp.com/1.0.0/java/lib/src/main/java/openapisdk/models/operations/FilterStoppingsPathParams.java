package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilterStoppingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public FilterStoppingsPathParams withType(String type) {
        this.type = type;
        return this;
    }
}