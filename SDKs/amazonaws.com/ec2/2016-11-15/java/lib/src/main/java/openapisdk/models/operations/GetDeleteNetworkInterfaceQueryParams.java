package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteNetworkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteNetworkInterfaceActionEnum action;
    public GetDeleteNetworkInterfaceQueryParams withAction(GetDeleteNetworkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteNetworkInterfaceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfaceId")
    public String networkInterfaceId;
    public GetDeleteNetworkInterfaceQueryParams withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteNetworkInterfaceVersionEnum version;
    public GetDeleteNetworkInterfaceQueryParams withVersion(GetDeleteNetworkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}