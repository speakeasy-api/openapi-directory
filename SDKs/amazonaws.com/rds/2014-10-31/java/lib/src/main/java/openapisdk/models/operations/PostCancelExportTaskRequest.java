package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelExportTaskRequest {
    public PostCancelExportTaskQueryParams queryParams;
    public PostCancelExportTaskRequest withQueryParams(PostCancelExportTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCancelExportTaskHeaders headers;
    public PostCancelExportTaskRequest withHeaders(PostCancelExportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCancelExportTaskRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}