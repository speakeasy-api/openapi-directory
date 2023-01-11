package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEventCategoriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeEventCategoriesActionEnum action;
    public PostDescribeEventCategoriesQueryParams withAction(PostDescribeEventCategoriesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeEventCategoriesVersionEnum version;
    public PostDescribeEventCategoriesQueryParams withVersion(PostDescribeEventCategoriesVersionEnum version) {
        this.version = version;
        return this;
    }
}