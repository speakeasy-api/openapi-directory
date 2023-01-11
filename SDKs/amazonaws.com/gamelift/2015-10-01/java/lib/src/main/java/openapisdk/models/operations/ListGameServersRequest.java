package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGameServersRequest {
    public ListGameServersQueryParams queryParams;
    public ListGameServersRequest withQueryParams(ListGameServersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListGameServersHeaders headers;
    public ListGameServersRequest withHeaders(ListGameServersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListGameServersInput request;
    public ListGameServersRequest withRequest(openapisdk.models.shared.ListGameServersInput request) {
        this.request = request;
        return this;
    }
}