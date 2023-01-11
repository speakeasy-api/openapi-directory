package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchUpdateTableRowsRequest {
    public BatchUpdateTableRowsPathParams pathParams;
    public BatchUpdateTableRowsRequest withPathParams(BatchUpdateTableRowsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchUpdateTableRowsHeaders headers;
    public BatchUpdateTableRowsRequest withHeaders(BatchUpdateTableRowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchUpdateTableRowsRequestBody request;
    public BatchUpdateTableRowsRequest withRequest(BatchUpdateTableRowsRequestBody request) {
        this.request = request;
        return this;
    }
}