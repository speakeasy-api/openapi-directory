package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCustomAvailabilityZonesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeCustomAvailabilityZonesActionEnum action;
    public PostDescribeCustomAvailabilityZonesQueryParams withAction(PostDescribeCustomAvailabilityZonesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeCustomAvailabilityZonesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeCustomAvailabilityZonesQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeCustomAvailabilityZonesVersionEnum version;
    public PostDescribeCustomAvailabilityZonesQueryParams withVersion(PostDescribeCustomAvailabilityZonesVersionEnum version) {
        this.version = version;
        return this;
    }
}