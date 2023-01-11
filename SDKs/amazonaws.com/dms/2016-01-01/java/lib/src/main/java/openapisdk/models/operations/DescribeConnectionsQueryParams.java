package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public DescribeConnectionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public DescribeConnectionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
}