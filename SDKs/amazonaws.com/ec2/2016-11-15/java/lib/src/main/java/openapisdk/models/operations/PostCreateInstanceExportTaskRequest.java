package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateInstanceExportTaskRequest {
    public PostCreateInstanceExportTaskQueryParams queryParams;
    public PostCreateInstanceExportTaskRequest withQueryParams(PostCreateInstanceExportTaskQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateInstanceExportTaskHeaders headers;
    public PostCreateInstanceExportTaskRequest withHeaders(PostCreateInstanceExportTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateInstanceExportTaskRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}