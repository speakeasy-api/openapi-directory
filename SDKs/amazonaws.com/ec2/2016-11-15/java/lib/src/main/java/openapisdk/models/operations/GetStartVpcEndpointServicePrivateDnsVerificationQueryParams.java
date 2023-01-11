package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStartVpcEndpointServicePrivateDnsVerificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetStartVpcEndpointServicePrivateDnsVerificationActionEnum action;
    public GetStartVpcEndpointServicePrivateDnsVerificationQueryParams withAction(GetStartVpcEndpointServicePrivateDnsVerificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetStartVpcEndpointServicePrivateDnsVerificationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceId")
    public String serviceId;
    public GetStartVpcEndpointServicePrivateDnsVerificationQueryParams withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetStartVpcEndpointServicePrivateDnsVerificationVersionEnum version;
    public GetStartVpcEndpointServicePrivateDnsVerificationQueryParams withVersion(GetStartVpcEndpointServicePrivateDnsVerificationVersionEnum version) {
        this.version = version;
        return this;
    }
}