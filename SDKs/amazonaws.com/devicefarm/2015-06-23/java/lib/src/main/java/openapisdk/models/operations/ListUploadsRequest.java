package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListUploadsRequest {
    public ListUploadsQueryParams queryParams;
    public ListUploadsRequest withQueryParams(ListUploadsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListUploadsHeaders headers;
    public ListUploadsRequest withHeaders(ListUploadsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListUploadsRequest request;
    public ListUploadsRequest withRequest(openapisdk.models.shared.ListUploadsRequest request) {
        this.request = request;
        return this;
    }
}