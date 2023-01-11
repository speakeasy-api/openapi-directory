package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteCustomerGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteCustomerGatewayActionEnum action;
    public GetDeleteCustomerGatewayQueryParams withAction(GetDeleteCustomerGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CustomerGatewayId")
    public String customerGatewayId;
    public GetDeleteCustomerGatewayQueryParams withCustomerGatewayId(String customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteCustomerGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteCustomerGatewayVersionEnum version;
    public GetDeleteCustomerGatewayQueryParams withVersion(GetDeleteCustomerGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}