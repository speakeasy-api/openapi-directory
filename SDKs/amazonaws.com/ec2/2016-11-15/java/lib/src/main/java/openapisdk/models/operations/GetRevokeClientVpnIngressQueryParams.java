package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRevokeClientVpnIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessGroupId")
    public String accessGroupId;
    public GetRevokeClientVpnIngressQueryParams withAccessGroupId(String accessGroupId) {
        this.accessGroupId = accessGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetRevokeClientVpnIngressActionEnum action;
    public GetRevokeClientVpnIngressQueryParams withAction(GetRevokeClientVpnIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetRevokeClientVpnIngressQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetRevokeClientVpnIngressQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RevokeAllGroups")
    public Boolean revokeAllGroups;
    public GetRevokeClientVpnIngressQueryParams withRevokeAllGroups(Boolean revokeAllGroups) {
        this.revokeAllGroups = revokeAllGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetNetworkCidr")
    public String targetNetworkCidr;
    public GetRevokeClientVpnIngressQueryParams withTargetNetworkCidr(String targetNetworkCidr) {
        this.targetNetworkCidr = targetNetworkCidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetRevokeClientVpnIngressVersionEnum version;
    public GetRevokeClientVpnIngressQueryParams withVersion(GetRevokeClientVpnIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}