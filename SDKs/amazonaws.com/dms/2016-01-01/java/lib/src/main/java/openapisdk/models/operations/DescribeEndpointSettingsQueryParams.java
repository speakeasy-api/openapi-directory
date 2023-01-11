package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEndpointSettingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public DescribeEndpointSettingsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public DescribeEndpointSettingsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
}