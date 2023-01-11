package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchCreateTableRowsRequest {
    public BatchCreateTableRowsPathParams pathParams;
    public BatchCreateTableRowsRequest withPathParams(BatchCreateTableRowsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchCreateTableRowsHeaders headers;
    public BatchCreateTableRowsRequest withHeaders(BatchCreateTableRowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchCreateTableRowsRequestBody request;
    public BatchCreateTableRowsRequest withRequest(BatchCreateTableRowsRequestBody request) {
        this.request = request;
        return this;
    }
}