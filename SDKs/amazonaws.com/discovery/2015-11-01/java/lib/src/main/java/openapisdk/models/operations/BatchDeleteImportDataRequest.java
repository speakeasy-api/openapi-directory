package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDeleteImportDataRequest {
    public BatchDeleteImportDataHeaders headers;
    public BatchDeleteImportDataRequest withHeaders(BatchDeleteImportDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDeleteImportDataRequest request;
    public BatchDeleteImportDataRequest withRequest(openapisdk.models.shared.BatchDeleteImportDataRequest request) {
        this.request = request;
        return this;
    }
}