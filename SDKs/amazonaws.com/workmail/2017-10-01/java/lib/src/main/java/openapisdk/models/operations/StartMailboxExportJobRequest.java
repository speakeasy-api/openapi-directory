package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartMailboxExportJobRequest {
    public StartMailboxExportJobHeaders headers;
    public StartMailboxExportJobRequest withHeaders(StartMailboxExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartMailboxExportJobRequest request;
    public StartMailboxExportJobRequest withRequest(openapisdk.models.shared.StartMailboxExportJobRequest request) {
        this.request = request;
        return this;
    }
}