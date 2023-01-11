package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartResourceScanRequest {
    public StartResourceScanHeaders headers;
    public StartResourceScanRequest withHeaders(StartResourceScanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartResourceScanRequestBody request;
    public StartResourceScanRequest withRequest(StartResourceScanRequestBody request) {
        this.request = request;
        return this;
    }
}