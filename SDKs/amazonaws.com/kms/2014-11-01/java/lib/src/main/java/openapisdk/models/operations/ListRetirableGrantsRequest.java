package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRetirableGrantsRequest {
    public ListRetirableGrantsHeaders headers;
    public ListRetirableGrantsRequest withHeaders(ListRetirableGrantsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListRetirableGrantsRequest request;
    public ListRetirableGrantsRequest withRequest(openapisdk.models.shared.ListRetirableGrantsRequest request) {
        this.request = request;
        return this;
    }
}