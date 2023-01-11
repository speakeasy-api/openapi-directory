package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeRegionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeRegionsActionEnum action;
    public PostDescribeRegionsQueryParams withAction(PostDescribeRegionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeRegionsVersionEnum version;
    public PostDescribeRegionsQueryParams withVersion(PostDescribeRegionsVersionEnum version) {
        this.version = version;
        return this;
    }
}