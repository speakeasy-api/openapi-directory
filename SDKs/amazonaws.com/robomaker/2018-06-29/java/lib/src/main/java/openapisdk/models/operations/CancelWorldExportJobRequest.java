package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelWorldExportJobRequest {
    public CancelWorldExportJobHeaders headers;
    public CancelWorldExportJobRequest withHeaders(CancelWorldExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CancelWorldExportJobRequestBody request;
    public CancelWorldExportJobRequest withRequest(CancelWorldExportJobRequestBody request) {
        this.request = request;
        return this;
    }
}