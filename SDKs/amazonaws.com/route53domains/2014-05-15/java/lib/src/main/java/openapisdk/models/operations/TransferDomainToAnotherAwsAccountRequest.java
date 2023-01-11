package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferDomainToAnotherAwsAccountRequest {
    public TransferDomainToAnotherAwsAccountHeaders headers;
    public TransferDomainToAnotherAwsAccountRequest withHeaders(TransferDomainToAnotherAwsAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TransferDomainToAnotherAwsAccountRequest request;
    public TransferDomainToAnotherAwsAccountRequest withRequest(openapisdk.models.shared.TransferDomainToAnotherAwsAccountRequest request) {
        this.request = request;
        return this;
    }
}