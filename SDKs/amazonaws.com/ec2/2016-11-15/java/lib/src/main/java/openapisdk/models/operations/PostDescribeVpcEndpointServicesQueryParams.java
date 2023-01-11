package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointServicesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeVpcEndpointServicesActionEnum action;
    public PostDescribeVpcEndpointServicesQueryParams withAction(PostDescribeVpcEndpointServicesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeVpcEndpointServicesVersionEnum version;
    public PostDescribeVpcEndpointServicesQueryParams withVersion(PostDescribeVpcEndpointServicesVersionEnum version) {
        this.version = version;
        return this;
    }
}