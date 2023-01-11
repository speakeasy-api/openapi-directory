package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLayersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CompatibleRuntime")
    public ListLayersCompatibleRuntimeEnum compatibleRuntime;
    public ListLayersQueryParams withCompatibleRuntime(ListLayersCompatibleRuntimeEnum compatibleRuntime) {
        this.compatibleRuntime = compatibleRuntime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListLayersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListLayersQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}