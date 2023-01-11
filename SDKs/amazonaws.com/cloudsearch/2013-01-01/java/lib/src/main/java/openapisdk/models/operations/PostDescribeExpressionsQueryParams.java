package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeExpressionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeExpressionsActionEnum action;
    public PostDescribeExpressionsQueryParams withAction(PostDescribeExpressionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeExpressionsVersionEnum version;
    public PostDescribeExpressionsQueryParams withVersion(PostDescribeExpressionsVersionEnum version) {
        this.version = version;
        return this;
    }
}