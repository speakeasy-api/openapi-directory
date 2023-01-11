package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizeClientVpnIngressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessGroupId")
    public String accessGroupId;
    public GetAuthorizeClientVpnIngressQueryParams withAccessGroupId(String accessGroupId) {
        this.accessGroupId = accessGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAuthorizeClientVpnIngressActionEnum action;
    public GetAuthorizeClientVpnIngressQueryParams withAction(GetAuthorizeClientVpnIngressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthorizeAllGroups")
    public Boolean authorizeAllGroups;
    public GetAuthorizeClientVpnIngressQueryParams withAuthorizeAllGroups(Boolean authorizeAllGroups) {
        this.authorizeAllGroups = authorizeAllGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientToken")
    public String clientToken;
    public GetAuthorizeClientVpnIngressQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientVpnEndpointId")
    public String clientVpnEndpointId;
    public GetAuthorizeClientVpnIngressQueryParams withClientVpnEndpointId(String clientVpnEndpointId) {
        this.clientVpnEndpointId = clientVpnEndpointId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetAuthorizeClientVpnIngressQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetAuthorizeClientVpnIngressQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TargetNetworkCidr")
    public String targetNetworkCidr;
    public GetAuthorizeClientVpnIngressQueryParams withTargetNetworkCidr(String targetNetworkCidr) {
        this.targetNetworkCidr = targetNetworkCidr;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAuthorizeClientVpnIngressVersionEnum version;
    public GetAuthorizeClientVpnIngressQueryParams withVersion(GetAuthorizeClientVpnIngressVersionEnum version) {
        this.version = version;
        return this;
    }
}