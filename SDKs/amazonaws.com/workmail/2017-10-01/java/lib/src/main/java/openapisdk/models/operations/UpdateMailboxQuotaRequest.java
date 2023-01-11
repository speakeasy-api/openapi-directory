package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMailboxQuotaRequest {
    public UpdateMailboxQuotaHeaders headers;
    public UpdateMailboxQuotaRequest withHeaders(UpdateMailboxQuotaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateMailboxQuotaRequest request;
    public UpdateMailboxQuotaRequest withRequest(openapisdk.models.shared.UpdateMailboxQuotaRequest request) {
        this.request = request;
        return this;
    }
}