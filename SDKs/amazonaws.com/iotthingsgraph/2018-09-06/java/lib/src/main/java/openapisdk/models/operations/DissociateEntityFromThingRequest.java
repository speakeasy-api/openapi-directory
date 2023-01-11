package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DissociateEntityFromThingRequest {
    public DissociateEntityFromThingHeaders headers;
    public DissociateEntityFromThingRequest withHeaders(DissociateEntityFromThingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DissociateEntityFromThingRequest request;
    public DissociateEntityFromThingRequest withRequest(openapisdk.models.shared.DissociateEntityFromThingRequest request) {
        this.request = request;
        return this;
    }
}