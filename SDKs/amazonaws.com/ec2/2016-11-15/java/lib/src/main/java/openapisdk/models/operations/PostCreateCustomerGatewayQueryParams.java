package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCustomerGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCustomerGatewayActionEnum action;
    public PostCreateCustomerGatewayQueryParams withAction(PostCreateCustomerGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCustomerGatewayVersionEnum version;
    public PostCreateCustomerGatewayQueryParams withVersion(PostCreateCustomerGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}