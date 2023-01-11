package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadArchiveRequest {
    public UploadArchivePathParams pathParams;
    public UploadArchiveRequest withPathParams(UploadArchivePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UploadArchiveHeaders headers;
    public UploadArchiveRequest withHeaders(UploadArchiveHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UploadArchiveRequestBody request;
    public UploadArchiveRequest withRequest(UploadArchiveRequestBody request) {
        this.request = request;
        return this;
    }
}