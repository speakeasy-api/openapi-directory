package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcClassicLinkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcClassicLinkActionEnum action;
    public PostDescribeVpcClassicLinkQueryParams withAction(PostDescribeVpcClassicLinkActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcClassicLinkVersionEnum version;
    public PostDescribeVpcClassicLinkQueryParams withVersion(PostDescribeVpcClassicLinkVersionEnum version) {
        this.version = version;
        return this;
    }
}