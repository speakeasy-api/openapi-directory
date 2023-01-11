package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFileRequest {
    public PutFileHeaders headers;
    public PutFileRequest withHeaders(PutFileHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutFileInput request;
    public PutFileRequest withRequest(openapisdk.models.shared.PutFileInput request) {
        this.request = request;
        return this;
    }
}