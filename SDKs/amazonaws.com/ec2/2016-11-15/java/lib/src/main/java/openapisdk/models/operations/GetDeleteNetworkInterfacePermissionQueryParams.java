package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteNetworkInterfacePermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteNetworkInterfacePermissionActionEnum action;
    public GetDeleteNetworkInterfacePermissionQueryParams withAction(GetDeleteNetworkInterfacePermissionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteNetworkInterfacePermissionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Force")
    public Boolean force;
    public GetDeleteNetworkInterfacePermissionQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfacePermissionId")
    public String networkInterfacePermissionId;
    public GetDeleteNetworkInterfacePermissionQueryParams withNetworkInterfacePermissionId(String networkInterfacePermissionId) {
        this.networkInterfacePermissionId = networkInterfacePermissionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteNetworkInterfacePermissionVersionEnum version;
    public GetDeleteNetworkInterfacePermissionQueryParams withVersion(GetDeleteNetworkInterfacePermissionVersionEnum version) {
        this.version = version;
        return this;
    }
}