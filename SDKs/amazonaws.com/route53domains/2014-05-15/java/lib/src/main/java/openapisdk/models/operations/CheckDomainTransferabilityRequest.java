package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckDomainTransferabilityRequest {
    public CheckDomainTransferabilityHeaders headers;
    public CheckDomainTransferabilityRequest withHeaders(CheckDomainTransferabilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckDomainTransferabilityRequest request;
    public CheckDomainTransferabilityRequest withRequest(openapisdk.models.shared.CheckDomainTransferabilityRequest request) {
        this.request = request;
        return this;
    }
}