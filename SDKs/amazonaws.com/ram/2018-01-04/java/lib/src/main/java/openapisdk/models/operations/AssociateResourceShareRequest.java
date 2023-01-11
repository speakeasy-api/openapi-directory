package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateResourceShareRequest {
    public AssociateResourceShareHeaders headers;
    public AssociateResourceShareRequest withHeaders(AssociateResourceShareHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateResourceShareRequestBody request;
    public AssociateResourceShareRequest withRequest(AssociateResourceShareRequestBody request) {
        this.request = request;
        return this;
    }
}