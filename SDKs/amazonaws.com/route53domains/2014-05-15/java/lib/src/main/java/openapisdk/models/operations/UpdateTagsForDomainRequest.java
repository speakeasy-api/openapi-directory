package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTagsForDomainRequest {
    public UpdateTagsForDomainHeaders headers;
    public UpdateTagsForDomainRequest withHeaders(UpdateTagsForDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateTagsForDomainRequest request;
    public UpdateTagsForDomainRequest withRequest(openapisdk.models.shared.UpdateTagsForDomainRequest request) {
        this.request = request;
        return this;
    }
}