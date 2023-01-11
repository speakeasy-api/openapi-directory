package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCustomerGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteCustomerGatewayActionEnum action;
    public PostDeleteCustomerGatewayQueryParams withAction(PostDeleteCustomerGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteCustomerGatewayVersionEnum version;
    public PostDeleteCustomerGatewayQueryParams withVersion(PostDeleteCustomerGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}