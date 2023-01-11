package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteEgressOnlyInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteEgressOnlyInternetGatewayActionEnum action;
    public GetDeleteEgressOnlyInternetGatewayQueryParams withAction(GetDeleteEgressOnlyInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteEgressOnlyInternetGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EgressOnlyInternetGatewayId")
    public String egressOnlyInternetGatewayId;
    public GetDeleteEgressOnlyInternetGatewayQueryParams withEgressOnlyInternetGatewayId(String egressOnlyInternetGatewayId) {
        this.egressOnlyInternetGatewayId = egressOnlyInternetGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteEgressOnlyInternetGatewayVersionEnum version;
    public GetDeleteEgressOnlyInternetGatewayQueryParams withVersion(GetDeleteEgressOnlyInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}