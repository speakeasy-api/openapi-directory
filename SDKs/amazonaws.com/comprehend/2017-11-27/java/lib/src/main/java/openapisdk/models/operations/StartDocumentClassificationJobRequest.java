package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDocumentClassificationJobRequest {
    public StartDocumentClassificationJobHeaders headers;
    public StartDocumentClassificationJobRequest withHeaders(StartDocumentClassificationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartDocumentClassificationJobRequest request;
    public StartDocumentClassificationJobRequest withRequest(openapisdk.models.shared.StartDocumentClassificationJobRequest request) {
        this.request = request;
        return this;
    }
}