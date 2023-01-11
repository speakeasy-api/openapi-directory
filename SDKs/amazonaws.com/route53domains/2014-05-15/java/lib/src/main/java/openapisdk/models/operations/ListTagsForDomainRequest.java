package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTagsForDomainRequest {
    public ListTagsForDomainHeaders headers;
    public ListTagsForDomainRequest withHeaders(ListTagsForDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTagsForDomainRequest request;
    public ListTagsForDomainRequest withRequest(openapisdk.models.shared.ListTagsForDomainRequest request) {
        this.request = request;
        return this;
    }
}