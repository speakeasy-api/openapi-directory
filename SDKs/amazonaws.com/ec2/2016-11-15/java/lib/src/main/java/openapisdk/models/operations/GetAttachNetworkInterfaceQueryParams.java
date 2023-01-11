package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachNetworkInterfaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachNetworkInterfaceActionEnum action;
    public GetAttachNetworkInterfaceQueryParams withAction(GetAttachNetworkInterfaceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DeviceIndex")
    public Long deviceIndex;
    public GetAttachNetworkInterfaceQueryParams withDeviceIndex(Long deviceIndex) {
        this.deviceIndex = deviceIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAttachNetworkInterfaceQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetAttachNetworkInterfaceQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkCardIndex")
    public Long networkCardIndex;
    public GetAttachNetworkInterfaceQueryParams withNetworkCardIndex(Long networkCardIndex) {
        this.networkCardIndex = networkCardIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfaceId")
    public String networkInterfaceId;
    public GetAttachNetworkInterfaceQueryParams withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachNetworkInterfaceVersionEnum version;
    public GetAttachNetworkInterfaceQueryParams withVersion(GetAttachNetworkInterfaceVersionEnum version) {
        this.version = version;
        return this;
    }
}