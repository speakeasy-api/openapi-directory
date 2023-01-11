package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckDomainAvailabilityRequest {
    public CheckDomainAvailabilityHeaders headers;
    public CheckDomainAvailabilityRequest withHeaders(CheckDomainAvailabilityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckDomainAvailabilityRequest request;
    public CheckDomainAvailabilityRequest withRequest(openapisdk.models.shared.CheckDomainAvailabilityRequest request) {
        this.request = request;
        return this;
    }
}