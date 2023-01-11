package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceRefreshesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeInstanceRefreshesActionEnum action;
    public PostDescribeInstanceRefreshesQueryParams withAction(PostDescribeInstanceRefreshesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeInstanceRefreshesVersionEnum version;
    public PostDescribeInstanceRefreshesQueryParams withVersion(PostDescribeInstanceRefreshesVersionEnum version) {
        this.version = version;
        return this;
    }
}