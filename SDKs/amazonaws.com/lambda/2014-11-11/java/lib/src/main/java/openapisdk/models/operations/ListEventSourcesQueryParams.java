package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEventSourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventSource")
    public String eventSource;
    public ListEventSourcesQueryParams withEventSource(String eventSource) {
        this.eventSource = eventSource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FunctionName")
    public String functionName;
    public ListEventSourcesQueryParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public ListEventSourcesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public ListEventSourcesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
}