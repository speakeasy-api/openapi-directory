package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTargetGroupsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeTargetGroupsActionEnum action;
    public PostDescribeTargetGroupsQueryParams withAction(PostDescribeTargetGroupsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeTargetGroupsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeTargetGroupsVersionEnum version;
    public PostDescribeTargetGroupsQueryParams withVersion(PostDescribeTargetGroupsVersionEnum version) {
        this.version = version;
        return this;
    }
}