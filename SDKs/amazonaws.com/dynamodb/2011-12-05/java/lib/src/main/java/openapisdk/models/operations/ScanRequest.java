package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScanRequest {
    public ScanQueryParams queryParams;
    public ScanRequest withQueryParams(ScanQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ScanHeaders headers;
    public ScanRequest withHeaders(ScanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScanInput request;
    public ScanRequest withRequest(openapisdk.models.shared.ScanInput request) {
        this.request = request;
        return this;
    }
}