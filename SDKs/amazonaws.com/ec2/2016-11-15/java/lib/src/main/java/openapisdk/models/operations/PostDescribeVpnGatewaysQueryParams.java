package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpnGatewaysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpnGatewaysActionEnum action;
    public PostDescribeVpnGatewaysQueryParams withAction(PostDescribeVpnGatewaysActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpnGatewaysVersionEnum version;
    public PostDescribeVpnGatewaysQueryParams withVersion(PostDescribeVpnGatewaysVersionEnum version) {
        this.version = version;
        return this;
    }
}