package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResetNetworkInterfaceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResetNetworkInterfaceAttributeActionEnum action;
    public GetResetNetworkInterfaceAttributeQueryParams withAction(GetResetNetworkInterfaceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetResetNetworkInterfaceAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfaceId")
    public String networkInterfaceId;
    public GetResetNetworkInterfaceAttributeQueryParams withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SourceDestCheck")
    public String sourceDestCheck;
    public GetResetNetworkInterfaceAttributeQueryParams withSourceDestCheck(String sourceDestCheck) {
        this.sourceDestCheck = sourceDestCheck;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResetNetworkInterfaceAttributeVersionEnum version;
    public GetResetNetworkInterfaceAttributeQueryParams withVersion(GetResetNetworkInterfaceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}