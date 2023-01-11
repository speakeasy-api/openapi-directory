package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventSourceMappingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventSourceArn")
    public String eventSourceArn;
    public ListEventSourceMappingsQueryParams withEventSourceArn(String eventSourceArn) {
        this.eventSourceArn = eventSourceArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FunctionName")
    public String functionName;
    public ListEventSourceMappingsQueryParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListEventSourceMappingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListEventSourceMappingsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}