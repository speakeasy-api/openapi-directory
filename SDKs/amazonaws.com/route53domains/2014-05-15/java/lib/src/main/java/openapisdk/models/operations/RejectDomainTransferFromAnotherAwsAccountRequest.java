package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RejectDomainTransferFromAnotherAwsAccountRequest {
    public RejectDomainTransferFromAnotherAwsAccountHeaders headers;
    public RejectDomainTransferFromAnotherAwsAccountRequest withHeaders(RejectDomainTransferFromAnotherAwsAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RejectDomainTransferFromAnotherAwsAccountRequest request;
    public RejectDomainTransferFromAnotherAwsAccountRequest withRequest(openapisdk.models.shared.RejectDomainTransferFromAnotherAwsAccountRequest request) {
        this.request = request;
        return this;
    }
}