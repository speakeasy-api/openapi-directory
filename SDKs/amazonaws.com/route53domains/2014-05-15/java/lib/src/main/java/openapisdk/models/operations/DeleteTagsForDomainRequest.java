package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagsForDomainRequest {
    public DeleteTagsForDomainHeaders headers;
    public DeleteTagsForDomainRequest withHeaders(DeleteTagsForDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteTagsForDomainRequest request;
    public DeleteTagsForDomainRequest withRequest(openapisdk.models.shared.DeleteTagsForDomainRequest request) {
        this.request = request;
        return this;
    }
}