package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAggregateIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAggregateIdFormatActionEnum action;
    public PostDescribeAggregateIdFormatQueryParams withAction(PostDescribeAggregateIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAggregateIdFormatVersionEnum version;
    public PostDescribeAggregateIdFormatQueryParams withVersion(PostDescribeAggregateIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}