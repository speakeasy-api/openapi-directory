package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateDhcpOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateDhcpOptionsActionEnum action;
    public GetAssociateDhcpOptionsQueryParams withAction(GetAssociateDhcpOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DhcpOptionsId")
    public String dhcpOptionsId;
    public GetAssociateDhcpOptionsQueryParams withDhcpOptionsId(String dhcpOptionsId) {
        this.dhcpOptionsId = dhcpOptionsId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAssociateDhcpOptionsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateDhcpOptionsVersionEnum version;
    public GetAssociateDhcpOptionsQueryParams withVersion(GetAssociateDhcpOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=VpcId")
    public String vpcId;
    public GetAssociateDhcpOptionsQueryParams withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}