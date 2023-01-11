package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartImageScanRequest {
    public StartImageScanHeaders headers;
    public StartImageScanRequest withHeaders(StartImageScanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartImageScanRequest request;
    public StartImageScanRequest withRequest(openapisdk.models.shared.StartImageScanRequest request) {
        this.request = request;
        return this;
    }
}