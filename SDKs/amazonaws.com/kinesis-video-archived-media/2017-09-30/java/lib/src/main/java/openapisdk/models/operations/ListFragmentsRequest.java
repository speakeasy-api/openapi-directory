package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFragmentsRequest {
    public ListFragmentsQueryParams queryParams;
    public ListFragmentsRequest withQueryParams(ListFragmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListFragmentsHeaders headers;
    public ListFragmentsRequest withHeaders(ListFragmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListFragmentsRequestBody request;
    public ListFragmentsRequest withRequest(ListFragmentsRequestBody request) {
        this.request = request;
        return this;
    }
}