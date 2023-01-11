package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExtractFilesRequest {
    public ExtractFilesHeaders headers;
    public ExtractFilesRequest withHeaders(ExtractFilesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ExtractFilesExtractFilesRequestBody request;
    public ExtractFilesRequest withRequest(ExtractFilesExtractFilesRequestBody request) {
        this.request = request;
        return this;
    }
}