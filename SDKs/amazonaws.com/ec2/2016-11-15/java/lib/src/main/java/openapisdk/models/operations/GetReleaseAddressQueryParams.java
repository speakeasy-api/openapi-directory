package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReleaseAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetReleaseAddressActionEnum action;
    public GetReleaseAddressQueryParams withAction(GetReleaseAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AllocationId")
    public String allocationId;
    public GetReleaseAddressQueryParams withAllocationId(String allocationId) {
        this.allocationId = allocationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetReleaseAddressQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkBorderGroup")
    public String networkBorderGroup;
    public GetReleaseAddressQueryParams withNetworkBorderGroup(String networkBorderGroup) {
        this.networkBorderGroup = networkBorderGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PublicIp")
    public String publicIp;
    public GetReleaseAddressQueryParams withPublicIp(String publicIp) {
        this.publicIp = publicIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetReleaseAddressVersionEnum version;
    public GetReleaseAddressQueryParams withVersion(GetReleaseAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}