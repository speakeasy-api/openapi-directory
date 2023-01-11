package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListVersionsByFunctionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListVersionsByFunctionQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListVersionsByFunctionQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}