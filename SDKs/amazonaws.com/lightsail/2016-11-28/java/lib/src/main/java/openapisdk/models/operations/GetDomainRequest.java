package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainRequest {
    public GetDomainHeaders headers;
    public GetDomainRequest withHeaders(GetDomainHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDomainRequest request;
    public GetDomainRequest withRequest(openapisdk.models.shared.GetDomainRequest request) {
        this.request = request;
        return this;
    }
}