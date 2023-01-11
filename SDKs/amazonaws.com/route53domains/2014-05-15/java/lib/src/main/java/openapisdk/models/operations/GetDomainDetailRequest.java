package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDomainDetailRequest {
    public GetDomainDetailHeaders headers;
    public GetDomainDetailRequest withHeaders(GetDomainDetailHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetDomainDetailRequest request;
    public GetDomainDetailRequest withRequest(openapisdk.models.shared.GetDomainDetailRequest request) {
        this.request = request;
        return this;
    }
}