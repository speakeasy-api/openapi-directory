package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDataSharesForConsumerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDataSharesForConsumerActionEnum action;
    public PostDescribeDataSharesForConsumerQueryParams withAction(PostDescribeDataSharesForConsumerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDataSharesForConsumerVersionEnum version;
    public PostDescribeDataSharesForConsumerQueryParams withVersion(PostDescribeDataSharesForConsumerVersionEnum version) {
        this.version = version;
        return this;
    }
}