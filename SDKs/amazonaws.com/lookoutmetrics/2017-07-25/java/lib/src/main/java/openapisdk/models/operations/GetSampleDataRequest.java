package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSampleDataRequest {
    public GetSampleDataHeaders headers;
    public GetSampleDataRequest withHeaders(GetSampleDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetSampleDataRequestBody request;
    public GetSampleDataRequest withRequest(GetSampleDataRequestBody request) {
        this.request = request;
        return this;
    }
}