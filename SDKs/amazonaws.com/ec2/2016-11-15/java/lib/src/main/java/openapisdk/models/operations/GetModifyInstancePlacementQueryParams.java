package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyInstancePlacementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyInstancePlacementActionEnum action;
    public GetModifyInstancePlacementQueryParams withAction(GetModifyInstancePlacementActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Affinity")
    public GetModifyInstancePlacementAffinityEnum affinity;
    public GetModifyInstancePlacementQueryParams withAffinity(GetModifyInstancePlacementAffinityEnum affinity) {
        this.affinity = affinity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=GroupName")
    public String groupName;
    public GetModifyInstancePlacementQueryParams withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HostId")
    public String hostId;
    public GetModifyInstancePlacementQueryParams withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HostResourceGroupArn")
    public String hostResourceGroupArn;
    public GetModifyInstancePlacementQueryParams withHostResourceGroupArn(String hostResourceGroupArn) {
        this.hostResourceGroupArn = hostResourceGroupArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetModifyInstancePlacementQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PartitionNumber")
    public Long partitionNumber;
    public GetModifyInstancePlacementQueryParams withPartitionNumber(Long partitionNumber) {
        this.partitionNumber = partitionNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Tenancy")
    public GetModifyInstancePlacementTenancyEnum tenancy;
    public GetModifyInstancePlacementQueryParams withTenancy(GetModifyInstancePlacementTenancyEnum tenancy) {
        this.tenancy = tenancy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyInstancePlacementVersionEnum version;
    public GetModifyInstancePlacementQueryParams withVersion(GetModifyInstancePlacementVersionEnum version) {
        this.version = version;
        return this;
    }
}