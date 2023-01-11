package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchUpdateFindingsRequest {
    public BatchUpdateFindingsHeaders headers;
    public BatchUpdateFindingsRequest withHeaders(BatchUpdateFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchUpdateFindingsRequestBody request;
    public BatchUpdateFindingsRequest withRequest(BatchUpdateFindingsRequestBody request) {
        this.request = request;
        return this;
    }
}