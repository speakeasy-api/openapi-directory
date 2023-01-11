package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDataSharesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeDataSharesActionEnum action;
    public PostDescribeDataSharesQueryParams withAction(PostDescribeDataSharesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeDataSharesVersionEnum version;
    public PostDescribeDataSharesQueryParams withVersion(PostDescribeDataSharesVersionEnum version) {
        this.version = version;
        return this;
    }
}