package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListSourceCredentialsRequest {
    public ListSourceCredentialsHeaders headers;
    public ListSourceCredentialsRequest withHeaders(ListSourceCredentialsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ListSourceCredentialsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}