package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDocumentClassifiersRequest {
    public ListDocumentClassifiersQueryParams queryParams;
    public ListDocumentClassifiersRequest withQueryParams(ListDocumentClassifiersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDocumentClassifiersHeaders headers;
    public ListDocumentClassifiersRequest withHeaders(ListDocumentClassifiersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListDocumentClassifiersRequest request;
    public ListDocumentClassifiersRequest withRequest(openapisdk.models.shared.ListDocumentClassifiersRequest request) {
        this.request = request;
        return this;
    }
}