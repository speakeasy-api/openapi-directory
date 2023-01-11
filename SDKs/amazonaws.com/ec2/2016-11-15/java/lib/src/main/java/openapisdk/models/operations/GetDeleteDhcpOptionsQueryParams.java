package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDhcpOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDhcpOptionsActionEnum action;
    public GetDeleteDhcpOptionsQueryParams withAction(GetDeleteDhcpOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DhcpOptionsId")
    public String dhcpOptionsId;
    public GetDeleteDhcpOptionsQueryParams withDhcpOptionsId(String dhcpOptionsId) {
        this.dhcpOptionsId = dhcpOptionsId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteDhcpOptionsQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDhcpOptionsVersionEnum version;
    public GetDeleteDhcpOptionsQueryParams withVersion(GetDeleteDhcpOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}