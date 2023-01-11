package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateDelegateToResourceRequest {
    public AssociateDelegateToResourceHeaders headers;
    public AssociateDelegateToResourceRequest withHeaders(AssociateDelegateToResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateDelegateToResourceRequest request;
    public AssociateDelegateToResourceRequest withRequest(openapisdk.models.shared.AssociateDelegateToResourceRequest request) {
        this.request = request;
        return this;
    }
}