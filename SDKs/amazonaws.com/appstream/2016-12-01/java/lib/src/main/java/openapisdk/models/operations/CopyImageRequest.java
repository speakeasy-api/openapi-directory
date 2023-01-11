package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CopyImageRequest {
    public CopyImageHeaders headers;
    public CopyImageRequest withHeaders(CopyImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopyImageRequest request;
    public CopyImageRequest withRequest(openapisdk.models.shared.CopyImageRequest request) {
        this.request = request;
        return this;
    }
}