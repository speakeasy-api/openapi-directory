package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListEntityRecognizersRequest {
    public ListEntityRecognizersQueryParams queryParams;
    public ListEntityRecognizersRequest withQueryParams(ListEntityRecognizersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListEntityRecognizersHeaders headers;
    public ListEntityRecognizersRequest withHeaders(ListEntityRecognizersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListEntityRecognizersRequest request;
    public ListEntityRecognizersRequest withRequest(openapisdk.models.shared.ListEntityRecognizersRequest request) {
        this.request = request;
        return this;
    }
}