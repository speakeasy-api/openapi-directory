package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelDomainTransferToAnotherAwsAccountRequest {
    public CancelDomainTransferToAnotherAwsAccountHeaders headers;
    public CancelDomainTransferToAnotherAwsAccountRequest withHeaders(CancelDomainTransferToAnotherAwsAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelDomainTransferToAnotherAwsAccountRequest request;
    public CancelDomainTransferToAnotherAwsAccountRequest withRequest(openapisdk.models.shared.CancelDomainTransferToAnotherAwsAccountRequest request) {
        this.request = request;
        return this;
    }
}