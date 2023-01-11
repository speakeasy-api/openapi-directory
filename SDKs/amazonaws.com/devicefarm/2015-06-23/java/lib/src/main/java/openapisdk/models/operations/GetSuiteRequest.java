package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuiteRequest {
    public GetSuiteHeaders headers;
    public GetSuiteRequest withHeaders(GetSuiteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSuiteRequest request;
    public GetSuiteRequest withRequest(openapisdk.models.shared.GetSuiteRequest request) {
        this.request = request;
        return this;
    }
}