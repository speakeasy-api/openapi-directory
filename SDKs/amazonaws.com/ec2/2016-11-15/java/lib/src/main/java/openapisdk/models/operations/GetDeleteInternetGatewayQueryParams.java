package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteInternetGatewayActionEnum action;
    public GetDeleteInternetGatewayQueryParams withAction(GetDeleteInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteInternetGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InternetGatewayId")
    public String internetGatewayId;
    public GetDeleteInternetGatewayQueryParams withInternetGatewayId(String internetGatewayId) {
        this.internetGatewayId = internetGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteInternetGatewayVersionEnum version;
    public GetDeleteInternetGatewayQueryParams withVersion(GetDeleteInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
}