package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateIpGroupsRequest {
    public DisassociateIpGroupsHeaders headers;
    public DisassociateIpGroupsRequest withHeaders(DisassociateIpGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateIpGroupsRequest request;
    public DisassociateIpGroupsRequest withRequest(openapisdk.models.shared.DisassociateIpGroupsRequest request) {
        this.request = request;
        return this;
    }
}