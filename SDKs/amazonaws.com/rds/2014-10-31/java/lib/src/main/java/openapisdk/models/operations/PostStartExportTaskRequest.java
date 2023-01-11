package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartExportTaskRequest {
    public PostStartExportTaskQueryParams queryParams;
    public PostStartExportTaskRequest withQueryParams(PostStartExportTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartExportTaskHeaders headers;
    public PostStartExportTaskRequest withHeaders(PostStartExportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartExportTaskRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}