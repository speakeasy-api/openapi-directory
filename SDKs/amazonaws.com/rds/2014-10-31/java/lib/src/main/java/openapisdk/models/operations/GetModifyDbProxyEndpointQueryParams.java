package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyDbProxyEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyDbProxyEndpointActionEnum action;
    public GetModifyDbProxyEndpointQueryParams withAction(GetModifyDbProxyEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBProxyEndpointName")
    public String dbProxyEndpointName;
    public GetModifyDbProxyEndpointQueryParams withDbProxyEndpointName(String dbProxyEndpointName) {
        this.dbProxyEndpointName = dbProxyEndpointName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewDBProxyEndpointName")
    public String newDBProxyEndpointName;
    public GetModifyDbProxyEndpointQueryParams withNewDbProxyEndpointName(String newDBProxyEndpointName) {
        this.newDBProxyEndpointName = newDBProxyEndpointName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyDbProxyEndpointVersionEnum version;
    public GetModifyDbProxyEndpointQueryParams withVersion(GetModifyDbProxyEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcSecurityGroupIds")
    public String[] vpcSecurityGroupIds;
    public GetModifyDbProxyEndpointQueryParams withVpcSecurityGroupIds(String[] vpcSecurityGroupIds) {
        this.vpcSecurityGroupIds = vpcSecurityGroupIds;
        return this;
    }
}