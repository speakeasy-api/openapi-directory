package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchImportFindingsRequest {
    public BatchImportFindingsHeaders headers;
    public BatchImportFindingsRequest withHeaders(BatchImportFindingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BatchImportFindingsRequestBody request;
    public BatchImportFindingsRequest withRequest(BatchImportFindingsRequestBody request) {
        this.request = request;
        return this;
    }
}