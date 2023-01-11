package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeHsmConfigurationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeHsmConfigurationsActionEnum action;
    public PostDescribeHsmConfigurationsQueryParams withAction(PostDescribeHsmConfigurationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeHsmConfigurationsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeHsmConfigurationsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeHsmConfigurationsVersionEnum version;
    public PostDescribeHsmConfigurationsQueryParams withVersion(PostDescribeHsmConfigurationsVersionEnum version) {
        this.version = version;
        return this;
    }
}