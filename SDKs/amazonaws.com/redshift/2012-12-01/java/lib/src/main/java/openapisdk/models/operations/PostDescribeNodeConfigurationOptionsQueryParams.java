package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNodeConfigurationOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeNodeConfigurationOptionsActionEnum action;
    public PostDescribeNodeConfigurationOptionsQueryParams withAction(PostDescribeNodeConfigurationOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeNodeConfigurationOptionsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeNodeConfigurationOptionsQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeNodeConfigurationOptionsVersionEnum version;
    public PostDescribeNodeConfigurationOptionsQueryParams withVersion(PostDescribeNodeConfigurationOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}