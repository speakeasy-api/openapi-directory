package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCustomerGatewaysQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeCustomerGatewaysActionEnum action;
    public PostDescribeCustomerGatewaysQueryParams withAction(PostDescribeCustomerGatewaysActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeCustomerGatewaysVersionEnum version;
    public PostDescribeCustomerGatewaysQueryParams withVersion(PostDescribeCustomerGatewaysVersionEnum version) {
        this.version = version;
        return this;
    }
}