package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachInternetGatewayActionEnum action;
    public GetAttachInternetGatewayQueryParams withAction(GetAttachInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAttachInternetGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InternetGatewayId")
    public String internetGatewayId;
    public GetAttachInternetGatewayQueryParams withInternetGatewayId(String internetGatewayId) {
        this.internetGatewayId = internetGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachInternetGatewayVersionEnum version;
    public GetAttachInternetGatewayQueryParams withVersion(GetAttachInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetAttachInternetGatewayQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}