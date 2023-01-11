package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateIpGroupsRequest {
    public AssociateIpGroupsHeaders headers;
    public AssociateIpGroupsRequest withHeaders(AssociateIpGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateIpGroupsRequest request;
    public AssociateIpGroupsRequest withRequest(openapisdk.models.shared.AssociateIpGroupsRequest request) {
        this.request = request;
        return this;
    }
}