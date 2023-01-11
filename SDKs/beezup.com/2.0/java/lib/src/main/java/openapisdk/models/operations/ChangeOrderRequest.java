package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeOrderRequest {
    public ChangeOrderPathParams pathParams;
    public ChangeOrderRequest withPathParams(ChangeOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ChangeOrderQueryParams queryParams;
    public ChangeOrderRequest withQueryParams(ChangeOrderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ChangeOrderHeaders headers;
    public ChangeOrderRequest withHeaders(ChangeOrderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, String> request;
    public ChangeOrderRequest withRequest(java.util.Map<String, String> request) {
        this.request = request;
        return this;
    }
}