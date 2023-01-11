package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachInternetGatewayQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachInternetGatewayActionEnum action;
    public GetDetachInternetGatewayQueryParams withAction(GetDetachInternetGatewayActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDetachInternetGatewayQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InternetGatewayId")
    public String internetGatewayId;
    public GetDetachInternetGatewayQueryParams withInternetGatewayId(String internetGatewayId) {
        this.internetGatewayId = internetGatewayId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachInternetGatewayVersionEnum version;
    public GetDetachInternetGatewayQueryParams withVersion(GetDetachInternetGatewayVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetDetachInternetGatewayQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}