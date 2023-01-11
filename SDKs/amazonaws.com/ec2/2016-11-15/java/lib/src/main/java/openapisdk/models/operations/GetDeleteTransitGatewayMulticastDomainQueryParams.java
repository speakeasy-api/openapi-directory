package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteTransitGatewayMulticastDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteTransitGatewayMulticastDomainActionEnum action;
    public GetDeleteTransitGatewayMulticastDomainQueryParams withAction(GetDeleteTransitGatewayMulticastDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDeleteTransitGatewayMulticastDomainQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TransitGatewayMulticastDomainId")
    public String transitGatewayMulticastDomainId;
    public GetDeleteTransitGatewayMulticastDomainQueryParams withTransitGatewayMulticastDomainId(String transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteTransitGatewayMulticastDomainVersionEnum version;
    public GetDeleteTransitGatewayMulticastDomainQueryParams withVersion(GetDeleteTransitGatewayMulticastDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}