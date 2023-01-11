package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelImportTaskRequest {
    public PostCancelImportTaskQueryParams queryParams;
    public PostCancelImportTaskRequest withQueryParams(PostCancelImportTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelImportTaskHeaders headers;
    public PostCancelImportTaskRequest withHeaders(PostCancelImportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelImportTaskRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}