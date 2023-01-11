package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEventSubscriptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEventSubscriptionsActionEnum action;
    public PostDescribeEventSubscriptionsQueryParams withAction(PostDescribeEventSubscriptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEventSubscriptionsVersionEnum version;
    public PostDescribeEventSubscriptionsQueryParams withVersion(PostDescribeEventSubscriptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}