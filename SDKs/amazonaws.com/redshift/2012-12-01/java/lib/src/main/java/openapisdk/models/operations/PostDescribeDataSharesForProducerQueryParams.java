package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDataSharesForProducerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDataSharesForProducerActionEnum action;
    public PostDescribeDataSharesForProducerQueryParams withAction(PostDescribeDataSharesForProducerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDataSharesForProducerVersionEnum version;
    public PostDescribeDataSharesForProducerQueryParams withVersion(PostDescribeDataSharesForProducerVersionEnum version) {
        this.version = version;
        return this;
    }
}