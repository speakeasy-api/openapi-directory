package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyVpcTenancyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyVpcTenancyActionEnum action;
    public GetModifyVpcTenancyQueryParams withAction(GetModifyVpcTenancyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetModifyVpcTenancyQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceTenancy")
    public GetModifyVpcTenancyInstanceTenancyEnum instanceTenancy;
    public GetModifyVpcTenancyQueryParams withInstanceTenancy(GetModifyVpcTenancyInstanceTenancyEnum instanceTenancy) {
        this.instanceTenancy = instanceTenancy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyVpcTenancyVersionEnum version;
    public GetModifyVpcTenancyQueryParams withVersion(GetModifyVpcTenancyVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetModifyVpcTenancyQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}