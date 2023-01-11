package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadDocumentsRequest {
    public UploadDocumentsQueryParams queryParams;
    public UploadDocumentsRequest withQueryParams(UploadDocumentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UploadDocumentsHeaders headers;
    public UploadDocumentsRequest withHeaders(UploadDocumentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UploadDocumentsRequestBody request;
    public UploadDocumentsRequest withRequest(UploadDocumentsRequestBody request) {
        this.request = request;
        return this;
    }
}