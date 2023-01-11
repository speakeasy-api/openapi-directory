package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AcceptDomainTransferFromAnotherAwsAccountRequest {
    public AcceptDomainTransferFromAnotherAwsAccountHeaders headers;
    public AcceptDomainTransferFromAnotherAwsAccountRequest withHeaders(AcceptDomainTransferFromAnotherAwsAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptDomainTransferFromAnotherAwsAccountRequest request;
    public AcceptDomainTransferFromAnotherAwsAccountRequest withRequest(openapisdk.models.shared.AcceptDomainTransferFromAnotherAwsAccountRequest request) {
        this.request = request;
        return this;
    }
}