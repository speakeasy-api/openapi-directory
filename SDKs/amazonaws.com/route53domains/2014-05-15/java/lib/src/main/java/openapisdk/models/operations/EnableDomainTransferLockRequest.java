package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableDomainTransferLockRequest {
    public EnableDomainTransferLockHeaders headers;
    public EnableDomainTransferLockRequest withHeaders(EnableDomainTransferLockHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableDomainTransferLockRequest request;
    public EnableDomainTransferLockRequest withRequest(openapisdk.models.shared.EnableDomainTransferLockRequest request) {
        this.request = request;
        return this;
    }
}