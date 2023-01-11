package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLayerVersionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CompatibleRuntime")
    public ListLayerVersionsCompatibleRuntimeEnum compatibleRuntime;
    public ListLayerVersionsQueryParams withCompatibleRuntime(ListLayerVersionsCompatibleRuntimeEnum compatibleRuntime) {
        this.compatibleRuntime = compatibleRuntime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListLayerVersionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListLayerVersionsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}