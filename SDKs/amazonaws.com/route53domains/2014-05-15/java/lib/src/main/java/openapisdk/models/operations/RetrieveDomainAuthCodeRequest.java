package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveDomainAuthCodeRequest {
    public RetrieveDomainAuthCodeHeaders headers;
    public RetrieveDomainAuthCodeRequest withHeaders(RetrieveDomainAuthCodeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RetrieveDomainAuthCodeRequest request;
    public RetrieveDomainAuthCodeRequest withRequest(openapisdk.models.shared.RetrieveDomainAuthCodeRequest request) {
        this.request = request;
        return this;
    }
}