package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartDataIngestionJobRequest {
    public StartDataIngestionJobHeaders headers;
    public StartDataIngestionJobRequest withHeaders(StartDataIngestionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartDataIngestionJobRequest request;
    public StartDataIngestionJobRequest withRequest(openapisdk.models.shared.StartDataIngestionJobRequest request) {
        this.request = request;
        return this;
    }
}