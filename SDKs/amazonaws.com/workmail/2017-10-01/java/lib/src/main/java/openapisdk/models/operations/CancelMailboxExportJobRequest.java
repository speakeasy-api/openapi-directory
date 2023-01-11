package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelMailboxExportJobRequest {
    public CancelMailboxExportJobHeaders headers;
    public CancelMailboxExportJobRequest withHeaders(CancelMailboxExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelMailboxExportJobRequest request;
    public CancelMailboxExportJobRequest withRequest(openapisdk.models.shared.CancelMailboxExportJobRequest request) {
        this.request = request;
        return this;
    }
}