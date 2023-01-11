package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchUpsertTableRowsRequest {
    public BatchUpsertTableRowsPathParams pathParams;
    public BatchUpsertTableRowsRequest withPathParams(BatchUpsertTableRowsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BatchUpsertTableRowsHeaders headers;
    public BatchUpsertTableRowsRequest withHeaders(BatchUpsertTableRowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchUpsertTableRowsRequestBody request;
    public BatchUpsertTableRowsRequest withRequest(BatchUpsertTableRowsRequestBody request) {
        this.request = request;
        return this;
    }
}