package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompressFilesRequest {
    public CompressFilesHeaders headers;
    public CompressFilesRequest withHeaders(CompressFilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CompressFilesCompressFilesRequestBody request;
    public CompressFilesRequest withRequest(CompressFilesCompressFilesRequestBody request) {
        this.request = request;
        return this;
    }
}