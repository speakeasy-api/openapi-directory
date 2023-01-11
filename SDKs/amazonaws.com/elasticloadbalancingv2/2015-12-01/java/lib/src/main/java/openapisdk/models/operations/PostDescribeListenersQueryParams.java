package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeListenersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeListenersActionEnum action;
    public PostDescribeListenersQueryParams withAction(PostDescribeListenersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeListenersQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeListenersVersionEnum version;
    public PostDescribeListenersQueryParams withVersion(PostDescribeListenersVersionEnum version) {
        this.version = version;
        return this;
    }
}