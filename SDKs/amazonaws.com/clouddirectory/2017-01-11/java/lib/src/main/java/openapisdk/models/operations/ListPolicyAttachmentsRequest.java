package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPolicyAttachmentsRequest {
    public ListPolicyAttachmentsQueryParams queryParams;
    public ListPolicyAttachmentsRequest withQueryParams(ListPolicyAttachmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPolicyAttachmentsHeaders headers;
    public ListPolicyAttachmentsRequest withHeaders(ListPolicyAttachmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListPolicyAttachmentsRequestBody request;
    public ListPolicyAttachmentsRequest withRequest(ListPolicyAttachmentsRequestBody request) {
        this.request = request;
        return this;
    }
}