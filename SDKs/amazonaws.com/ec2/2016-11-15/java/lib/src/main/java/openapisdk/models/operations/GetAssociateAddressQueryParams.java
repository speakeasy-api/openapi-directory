package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociateAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAssociateAddressActionEnum action;
    public GetAssociateAddressQueryParams withAction(GetAssociateAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AllocationId")
    public String allocationId;
    public GetAssociateAddressQueryParams withAllocationId(String allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AllowReassociation")
    public Boolean allowReassociation;
    public GetAssociateAddressQueryParams withAllowReassociation(Boolean allowReassociation) {
        this.allowReassociation = allowReassociation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAssociateAddressQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetAssociateAddressQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfaceId")
    public String networkInterfaceId;
    public GetAssociateAddressQueryParams withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrivateIpAddress")
    public String privateIpAddress;
    public GetAssociateAddressQueryParams withPrivateIpAddress(String privateIpAddress) {
        this.privateIpAddress = privateIpAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PublicIp")
    public String publicIp;
    public GetAssociateAddressQueryParams withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAssociateAddressVersionEnum version;
    public GetAssociateAddressQueryParams withVersion(GetAssociateAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}