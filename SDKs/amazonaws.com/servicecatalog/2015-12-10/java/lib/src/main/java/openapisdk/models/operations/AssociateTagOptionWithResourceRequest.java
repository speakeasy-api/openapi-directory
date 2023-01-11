package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateTagOptionWithResourceRequest {
    public AssociateTagOptionWithResourceHeaders headers;
    public AssociateTagOptionWithResourceRequest withHeaders(AssociateTagOptionWithResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateTagOptionWithResourceInput request;
    public AssociateTagOptionWithResourceRequest withRequest(openapisdk.models.shared.AssociateTagOptionWithResourceInput request) {
        this.request = request;
        return this;
    }
}