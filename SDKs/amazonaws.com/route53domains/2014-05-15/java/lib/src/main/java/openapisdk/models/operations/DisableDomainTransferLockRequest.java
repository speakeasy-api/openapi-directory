package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableDomainTransferLockRequest {
    public DisableDomainTransferLockHeaders headers;
    public DisableDomainTransferLockRequest withHeaders(DisableDomainTransferLockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableDomainTransferLockRequest request;
    public DisableDomainTransferLockRequest withRequest(openapisdk.models.shared.DisableDomainTransferLockRequest request) {
        this.request = request;
        return this;
    }
}