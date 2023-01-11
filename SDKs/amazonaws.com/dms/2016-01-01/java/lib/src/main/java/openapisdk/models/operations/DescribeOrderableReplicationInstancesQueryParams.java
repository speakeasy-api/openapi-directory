package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeOrderableReplicationInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public DescribeOrderableReplicationInstancesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public DescribeOrderableReplicationInstancesQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
}