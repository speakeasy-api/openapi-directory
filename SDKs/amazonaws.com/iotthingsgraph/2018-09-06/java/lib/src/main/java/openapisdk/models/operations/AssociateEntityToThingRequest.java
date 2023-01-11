package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateEntityToThingRequest {
    public AssociateEntityToThingHeaders headers;
    public AssociateEntityToThingRequest withHeaders(AssociateEntityToThingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateEntityToThingRequest request;
    public AssociateEntityToThingRequest withRequest(openapisdk.models.shared.AssociateEntityToThingRequest request) {
        this.request = request;
        return this;
    }
}