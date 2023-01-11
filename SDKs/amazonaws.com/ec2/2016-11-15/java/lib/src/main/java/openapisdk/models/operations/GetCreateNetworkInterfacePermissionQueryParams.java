package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateNetworkInterfacePermissionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateNetworkInterfacePermissionActionEnum action;
    public GetCreateNetworkInterfacePermissionQueryParams withAction(GetCreateNetworkInterfacePermissionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AwsAccountId")
    public String awsAccountId;
    public GetCreateNetworkInterfacePermissionQueryParams withAwsAccountId(String awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AwsService")
    public String awsService;
    public GetCreateNetworkInterfacePermissionQueryParams withAwsService(String awsService) {
        this.awsService = awsService;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetCreateNetworkInterfacePermissionQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfaceId")
    public String networkInterfaceId;
    public GetCreateNetworkInterfacePermissionQueryParams withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Permission")
    public GetCreateNetworkInterfacePermissionPermissionEnum permission;
    public GetCreateNetworkInterfacePermissionQueryParams withPermission(GetCreateNetworkInterfacePermissionPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateNetworkInterfacePermissionVersionEnum version;
    public GetCreateNetworkInterfacePermissionQueryParams withVersion(GetCreateNetworkInterfacePermissionVersionEnum version) {
        this.version = version;
        return this;
    }
}