package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDefaultClusterParametersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDefaultClusterParametersActionEnum action;
    public PostDescribeDefaultClusterParametersQueryParams withAction(PostDescribeDefaultClusterParametersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeDefaultClusterParametersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeDefaultClusterParametersQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDefaultClusterParametersVersionEnum version;
    public PostDescribeDefaultClusterParametersQueryParams withVersion(PostDescribeDefaultClusterParametersVersionEnum version) {
        this.version = version;
        return this;
    }
}