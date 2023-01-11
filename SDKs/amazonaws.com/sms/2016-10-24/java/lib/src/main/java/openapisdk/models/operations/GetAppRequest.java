package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAppRequest {
    public GetAppHeaders headers;
    public GetAppRequest withHeaders(GetAppHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAppRequest request;
    public GetAppRequest withRequest(openapisdk.models.shared.GetAppRequest request) {
        this.request = request;
        return this;
    }
}