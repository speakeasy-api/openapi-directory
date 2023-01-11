package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartUserImportJobRequest {
    public StartUserImportJobHeaders headers;
    public StartUserImportJobRequest withHeaders(StartUserImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartUserImportJobRequest request;
    public StartUserImportJobRequest withRequest(openapisdk.models.shared.StartUserImportJobRequest request) {
        this.request = request;
        return this;
    }
}