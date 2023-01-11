package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpnConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpnConnectionsActionEnum action;
    public PostDescribeVpnConnectionsQueryParams withAction(PostDescribeVpnConnectionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpnConnectionsVersionEnum version;
    public PostDescribeVpnConnectionsQueryParams withVersion(PostDescribeVpnConnectionsVersionEnum version) {
        this.version = version;
        return this;
    }
}