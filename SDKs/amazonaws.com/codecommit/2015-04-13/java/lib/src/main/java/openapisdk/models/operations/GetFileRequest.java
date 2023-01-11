package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileRequest {
    public GetFileHeaders headers;
    public GetFileRequest withHeaders(GetFileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFileInput request;
    public GetFileRequest withRequest(openapisdk.models.shared.GetFileInput request) {
        this.request = request;
        return this;
    }
}