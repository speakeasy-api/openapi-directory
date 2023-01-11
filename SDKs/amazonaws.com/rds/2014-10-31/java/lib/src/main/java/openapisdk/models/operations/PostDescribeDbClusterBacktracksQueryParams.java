package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterBacktracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDbClusterBacktracksActionEnum action;
    public PostDescribeDbClusterBacktracksQueryParams withAction(PostDescribeDbClusterBacktracksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeDbClusterBacktracksQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeDbClusterBacktracksQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDbClusterBacktracksVersionEnum version;
    public PostDescribeDbClusterBacktracksQueryParams withVersion(PostDescribeDbClusterBacktracksVersionEnum version) {
        this.version = version;
        return this;
    }
}