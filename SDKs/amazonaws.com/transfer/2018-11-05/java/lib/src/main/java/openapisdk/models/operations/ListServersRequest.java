package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListServersRequest {
    public ListServersQueryParams queryParams;
    public ListServersRequest withQueryParams(ListServersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListServersHeaders headers;
    public ListServersRequest withHeaders(ListServersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListServersRequest request;
    public ListServersRequest withRequest(openapisdk.models.shared.ListServersRequest request) {
        this.request = request;
        return this;
    }
}