package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecognizeCelebritiesRequest {
    public RecognizeCelebritiesHeaders headers;
    public RecognizeCelebritiesRequest withHeaders(RecognizeCelebritiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RecognizeCelebritiesRequest request;
    public RecognizeCelebritiesRequest withRequest(openapisdk.models.shared.RecognizeCelebritiesRequest request) {
        this.request = request;
        return this;
    }
}