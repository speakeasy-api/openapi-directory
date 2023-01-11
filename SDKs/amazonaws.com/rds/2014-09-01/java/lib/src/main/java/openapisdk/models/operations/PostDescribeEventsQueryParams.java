package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEventsActionEnum action;
    public PostDescribeEventsQueryParams withAction(PostDescribeEventsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEventsVersionEnum version;
    public PostDescribeEventsQueryParams withVersion(PostDescribeEventsVersionEnum version) {
        this.version = version;
        return this;
    }
}