package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilterFileDataStoppingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public FilterFileDataStoppingsPathParams withType(String type) {
        this.type = type;
        return this;
    }
}