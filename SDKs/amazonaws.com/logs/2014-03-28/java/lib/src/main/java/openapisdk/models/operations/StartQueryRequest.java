package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartQueryRequest {
    public StartQueryHeaders headers;
    public StartQueryRequest withHeaders(StartQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartQueryRequest request;
    public StartQueryRequest withRequest(openapisdk.models.shared.StartQueryRequest request) {
        this.request = request;
        return this;
    }
}